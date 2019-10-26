const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddKibblesModal = require("../Kibbles/AddKibblesModal");
const moment = require("moment");

class Index extends React.Component {
  render() {
    console.log("*** this.props.allKibbles ***", this.props.allKibbles );

    let allKibbles = "";
    if (this.props.allKibbles) {
      allKibbles = this.props.allKibbles.map(kibble => (
        <div>
          <p>Brand: {kibble.brand}</p>
          <p>{kibble.description}</p>
          <p>Weight: {kibble.weight}</p>
          <p>Price: {kibble.price}</p>
          <p>Purchased on: {moment(kibble.date_purchased).format("L")}</p>
          <p>Opened on: {moment(kibble.date_opened).format("L")}</p>
          <p>Expiring on: {moment(kibble.date_expiry).format("L")}</p>
        </div>
      ));
    }

    return (
      <DefaultLayout title="Kibbles">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Kibbles</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addKibblesModal"
                style={{ "border-radius": "5%" }}
              >
                Add Kibbles
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {allKibbles}
            </div>
          </div>
        </div>
        <AddKibblesModal />
        <script src="/kibbles.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
