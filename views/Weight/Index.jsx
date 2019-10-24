const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");
const Chart = require("chart.js");

class Index extends React.Component {
  render() {
    let allWeight = <p>No weight record found</p>;
    if (this.props.allWeight) {
      allWeight = (
        <div>
          {this.props.allWeight.map(weight => (
            <React.Fragment>
              <p key={weight.date.toString()}>{weight.date.toString()}</p>
              <p key={weight.record}>{weight.record}</p>
              <hr />
            </React.Fragment>
          ))}
        </div>
      );
    }

    return (
      <DefaultLayout title="Weight">
        <h3>Weight</h3>
        <div>
          <p>
            <a href="/weight/add">Add new weight record</a>
            <canvas id="myChart" width="400" height="400"></canvas>
          </p>
        </div>
        {allWeight}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
          integrity="sha256-Uv9BNBucvCPipKQ2NS9wYpJmi8DTOEfTA/nH2aoJALw="
          crossorigin="anonymous"
        ></script>
        <script src="/weight.js"></script>
        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
