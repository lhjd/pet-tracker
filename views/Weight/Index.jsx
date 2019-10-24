const React = require("react");
const Footer = require("../UI/Footer");
const Header = require("../UI/Header");
const DefaultLayout = require("../Layout/DefaultLayout");
const Chart = require("chart.js");
const moment = require("moment");

class Index extends React.Component {
  render() {
    let weightRows = <p>No weight record found</p>;
    if (this.props.allWeight) {
      weightRows = this.props.allWeight.map((weight, i) => (
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{moment(weight.date.toString()).format('L')}</td>
          <td>{weight.record}</td>
        </tr>
      ));
      // console.log("*** weightRows ***", weightRows);
    }

    return (
      <DefaultLayout title="Weight">
        <Header />
        <div className="container" style={{"margin-bottom": "80px"}}>
          <div className="col">
            <div className="row">
              <div className="col">
                <h3>Weight</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  <a href="/weight/add">Add new weight record</a>
                </p>
                <canvas id="myChart" width="400" height="400"></canvas>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Date</th>
                      <th scope="col">Weight (kg)</th>
                    </tr>
                  </thead>
                  <tbody>{weightRows}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* {allWeight} */}
        <Footer />

      </DefaultLayout>
    );
  }
}

module.exports = Index;
