const React = require("react");
const Footer = require("../UI/Footer");
const Header = require("../UI/Header");
const DefaultLayout = require("../Layout/DefaultLayout");
const Chart = require("chart.js");
const moment = require("moment");
const AddModal = require("../Weight/AddModal");

class Index extends React.Component {
  render() {
    let weightRows = <p>No weight record found</p>;
    if (this.props.allWeight) {
      weightRows = this.props.allWeight.map((weight, i) => (
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{moment(weight.date.toString()).format("L")}</td>
          <td>{weight.record}</td>
        </tr>
      ));
    }

    return (
      <DefaultLayout title="Weight">
        <div className="container" style={{ "margin-bottom": "100px", "margin-top": "10px"}}>
          <div className="col">
            <div className="row">
              <div className="col">
                <h3><i class="fas fa-weight mr-2"></i>Weight</h3>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <p>
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-toggle="modal"
                    data-target="#addWeightModal"
                    style={{"border-radius":"5%"}}
                  >
                    <i class="fas fa-plus-circle mr-2"></i>record
                  </button>
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
        <AddModal />
        <script src="/weight.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
