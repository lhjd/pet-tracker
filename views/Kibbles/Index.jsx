const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddKibblesModal = require("../Kibbles/AddKibblesModal");
const AddFeedingModal = require("../Kibbles/AddFeedingModal");
const moment = require("moment");

class Index extends React.Component {
  render() {
    // console.log("*** this.props.allKibbles ***", this.props.allKibbles);
    // console.log("*** this.props.allPets ***", this.props.allPets);
    console.log("*** this.props.allFeeding ***", this.props.allFeeding);
    console.log("*** this.props.allFeeding.length ***", this.props.allFeeding.length);

    let allFeeding = "";
    if (this.props.allFeeding) {
      allFeeding = this.props.allFeeding.map(feeding => (
        <li>
          <p>Plan: {feeding.plan_name}</p>
          <p>Pet: {feeding.name}</p>
          <p>Daily frequency: {feeding.daily_frequency}</p>
          <p>Portion weight: {feeding.portion_weight}g</p>
          <p>
            Kibbles: {feeding.brand} - {feeding.description}
          </p>
        </li>
      ));
    }

    let allPets = "";
    if (this.props.allPets) {
      allPets = this.props.allPets.map(pet => (
        <li>
          <p>{pet.name}</p>
        </li>
      ));
    }

    let allKibbles = "";
    if (this.props.allKibbles) {
      allKibbles = this.props.allKibbles.map(kibble => (
        <li>
          <p>
            {kibble.brand} - {kibble.description}
          </p>
          {/* <p>Weight: {kibble.weight}</p>
          <p>Price: {kibble.price}</p>
          <p>Purchased on: {moment(kibble.date_purchased).format("L")}</p>
          <p>Opened on: {moment(kibble.date_opened).format("L")}</p>
          <p>Expiring on: {moment(kibble.date_expiry).format("L")}</p> */}
        </li>
      ));
    }

    return (
      <DefaultLayout title="Kibbles">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>
                <i class="fas fa-ring mr-2"></i>Feeding
              </h3>
            </div>
          </div>
          <div className="row m-3">
            <div className="col text-center">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addKibblesModal"
                style={{ "border-radius": "5%", width: "120px" }}
              >
                <i class="fas fa-plus-circle mr-2"></i>kibbles
              </button>
            </div>
            <div className="col text-center">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addFeedingModal"
                style={{ "border-radius": "5%", width: "120px" }}
              >
                <i class="fas fa-plus-circle mr-2"></i>plan
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>
                <i class="fas fa-dog mr-2"></i>
                {allPets.length > 1 ? "My Pets" : "My Pet"}
              </h6>
              <ol>{allPets}</ol>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>
                <i class="fas fa-box-open mr-2"></i>
                My kibbles:
              </h6>
              <ol>
                {allKibbles.length > 0 ? (
                  allKibbles
                ) : (
                  <a
                    data-toggle="modal"
                    data-target="#addKibblesModal"
                    style={{
                      "text-decoration": "underline",
                      cursor: "pointer",
                      color: "brown"
                    }}
                  >
                    No kibbles found. Add one now.
                  </a>
                )}
              </ol>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>
                <i class="fas fa-ring mr-2"></i>
                {allPets.length > 1 ? "My Feeding Plan" : "My Feeding Plans"}
              </h6>
              <ol>
                {allFeeding.length > 0 ? (
                  allFeeding
                ) : (
                  <a
                    data-toggle="modal"
                    data-target="#addFeedingModal"
                    style={{
                      "text-decoration": "underline",
                      cursor: "pointer",
                      color: "brown"
                    }}
                  >
                    No feeding plans found. Add one now.
                  </a>
                )}
              </ol>
            </div>
          </div>
        </div>
        <AddKibblesModal />
        <AddFeedingModal
          pets={this.props.allPets}
          kibbles={this.props.allKibbles}
        />
        <script src="/kibbles.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
