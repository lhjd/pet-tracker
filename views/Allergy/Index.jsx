const React = require("react");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddModal = require("./AddModal");

class Index extends React.Component {
  render() {
    let allAllergies = "";

    if (this.props.allAllergies) {
      allAllergies = this.props.allAllergies.map(allergy => (
        <React.Fragment>
          <p>Allergy: {allergy.symptom}</p>
          <p>Food: {allergy.food}</p>
          <hr />
        </React.Fragment>
      ));
    }

    return (
      <DefaultLayout title="Allergies">
        <div className="container" style={{ "margin-bottom": "100px", "margin-top" : "10px" }}>
          <div className="row">
            <div className="col">
              <h3><i class="fas fa-bomb mr-2"></i>Allergy</h3>
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addAllergyModal"
                style={{ "border-radius": "5%" }}
              >
                <i class="fas fa-plus-circle mr-2"></i>record
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">{allAllergies}</div>
          </div>
        </div>
        <AddModal />
        <script src="/allergy.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
