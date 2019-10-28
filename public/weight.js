// function for updating the chart with data from backend
function addDataToChart(chart, label, data) {
  chart.data.labels.length = 0;

  chart.data.datasets.forEach(dataset => {
    dataset.data.length = 0;
  });

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

// callback for processsing the weight data from backend and update the chart
function getWeightDataResponseHandler() {
  if (this.responseText) {
    const records = JSON.parse(this.responseText).data;
    const weightLabels = records.map(record => moment(record.x).toDate());
    const weight = records.map(record => record.y);
    addDataToChart(weightChart, weightLabels, weight);
  } else {
    // reset the chart
    weightChart.data.labels.length = 0;
    weightChart.data.datasets.forEach(dataset => {
      dataset.data.length = 0;
    });
    weightChart.update();
  }
}

function getWeightData(petId) {
  const request = new XMLHttpRequest();
  request.addEventListener("load", getWeightDataResponseHandler);
  const url = "/data/weight/" + petId;
  // console.log("*** url ***", url);
  request.open("GET", url);
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

getWeightData(1);

function addWeightRecordHanlder(petId) {
  document.querySelector('#getWeightRecordsByPet [value="' + petId + '"]').selected = true;
  getWeightData(petId);
}

document
  .querySelector("#addWeightRecordBtn")
  .addEventListener("click", event => {
    event.preventDefault();
    const record = document.querySelector("#record-weight").value;
    const date = document.querySelector("#record-date").value;
    const pet_id = document.querySelector("#record-pet-id").value;
    const data = { record, date, pet_id};

    const request = new XMLHttpRequest(); // new HttpRequest instance
    request.addEventListener("load", () => {
      addWeightRecordHanlder(pet_id);
    });
    request.open("POST", "/weight");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
    $("#addWeightModal").modal("hide");
  });

document
  .querySelector("#getWeightRecordsByPet")
  .addEventListener("change", event => {
    const petId = event.target.value;
    console.log("petId", petId);
    getWeightData(petId);
  });
