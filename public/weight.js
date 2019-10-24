// function for updating the chart with data from backend
function addDataToChart(chart, label, data) {
  label.forEach(item => {
    chart.data.labels.push(item);
  });
  data.forEach(item => {
    chart.data.datasets.forEach(dataset => {
      dataset.data.push(item);
    });
  });
  chart.update();
}

function addOneDataToChart(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}


// callback for processsing the weight data from backend and update the chart
function responseHandler() {
  if (this.responseText) {
    const records = JSON.parse(this.responseText).data;
    const weightLabels = records.map(record => moment(record.x).toDate());
    const weight = records.map(record => record.y);
    addDataToChart(weightChart, weightLabels, weight);
  }
}

function getWeightData() {
  // make a new request
  const request = new XMLHttpRequest();

  // listen for the request response
  request.addEventListener("load", responseHandler);

  // ready the system by calling open, and specifying the url
  const url = "/data/weight/all";
  request.open("GET", url);

  // send the request
  request.send();
}

let ctx = document.getElementById("myChart").getContext("2d");

let config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Weight",
        backgroundColor: "red",
        borderColor: "red",
        fill: false,
        data: []
      }
    ]
  },
  options: {
    title: {
      text: "Chart.js Time Scale"
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            // parser: timeFormat,
            round: "day",
            tooltipFormat: "ll"
          },
          scaleLabel: {
            display: true,
            labelString: "date"
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "weight (kg)"
          }
        }
      ]
    }
  }
};

let weightChart = new Chart(ctx, config);

getWeightData();

document
  .querySelector("#addWeightRecordBtn")
  .addEventListener("click", event => {
    event.preventDefault();
    const recordWeight = document.querySelector("#record-weight").value;
    const recordDate = document.querySelector("#record-date").value;
    var data = { record: recordWeight, date: recordDate };

    var request = new XMLHttpRequest(); // new HttpRequest instance

    request.addEventListener("load", function() {
      const record = JSON.parse(this.responseText);
      const weightLabel = moment(record.addedWeight[0].date).toDate();
      const weight = record.addedWeight[0].record;
      addOneDataToChart(weightChart, weightLabel, weight);

      const trEl = document.createElement("tr");
      const thEl = document.createElement("th");
      thEl.setAttribute("scope", "row");
      let nextRowNum = document.querySelector("tbody").childElementCount + 1;
      thEl.innerText = nextRowNum;
      const tdEl1 = document.createElement("td");
      tdEl1.innerText = record.addedWeight[0].date;
      const tdEl2 = document.createElement("td");
      tdEl2.innerText = record.addedWeight[0].record;
      trEl.appendChild(thEl);
      trEl.appendChild(tdEl1);
      trEl.appendChild(tdEl2);
      document.querySelector("tbody").appendChild(trEl);
    });

    request.open("POST", "/weight");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));
    $("#addWeightModal").modal("hide");
  });
