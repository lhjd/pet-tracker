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
            round: 'day',
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

console.log("*** weightChart ***", weightChart);

getWeightData();

