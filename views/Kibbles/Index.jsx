const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddKibblesModal = require("../Kibbles/AddKibblesModal");
const AddFeedingModal = require("../Kibbles/AddFeedingModal");
const moment = require("moment");

class Index extends React.Component {
  render() {
    console.log(
      "*** this.props.kibblesConsumption ***",
      this.props.kibblesConsumption
    );

    let kibblesConsumption = "";
    if (this.props.kibblesConsumption) {
      kibblesConsumption = this.props.kibblesConsumption.map(kibbles => {
  
        let percentConsumed = (+kibbles.total_daily_consumption / 1000 * kibbles.days) / +kibbles.weight * 100;
        let percentLeft = (100 - percentConsumed).toFixed(1);
        let percentLeftWithPercentSign = percentLeft + "%";
        let percentLeftBar = { "width" : percentLeftWithPercentSign };

        return (
        <div>
          <p>Brand: {kibbles.brand}</p>
          <p>Opened on: {moment(kibbles.date_opened).format("L")}</p>
          <p>Consumed for {kibbles.days} days</p>
          <p>
            Total daily consumption:{" "}
            {(kibbles.total_daily_consumption / 1000).toFixed(1)}kg
          </p>
          <p>
            Total consumed so far:{" "}
            {((+kibbles.total_daily_consumption / 1000) * kibbles.days).toFixed(
              1
            )}
            kg
          </p>
          <p>Kibbles weight: {(+kibbles.weight).toFixed(1)}kg</p>
          <p>
            Kibbles left:{" "}
            {(
              +kibbles.weight -
              (+kibbles.total_daily_consumption / 1000) * kibbles.days
            ).toFixed(1)}
            kg
          </p>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={percentLeftBar}
              aria-valuenow={percentLeft}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {percentLeft}%
            </div>
          </div>
        </div>
      );
      });
    }
    console.log("*** kibblesConsumption ***", kibblesConsumption);

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
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>
                <i class="fas fa-utensils mr-2"></i>Kibbles consumption
              </h6>
              {kibblesConsumption}
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
