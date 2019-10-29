const React = require("react");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddWeightModal = require("./AddWeightModal");

class Index extends React.Component {
  render() {
    // console.log("*** this.props.allPets ***", this.props.allPets);
    // console.log(
    //   "*** this.props.allWeightsByPet ***",
    //   this.props.allWeightsByPet
    // );

    let petOptions = [];
    if (this.props.allPets) {
      petOptions = this.props.allPets.map((pet, index) => {
        if (index === 0) {
          return (
            <option value={pet.pet_id} selected>
              {pet.name}
            </option>
          );
        } else {
          return <option value={pet.pet_id}>{pet.name}</option>;
        }
      });
    }

    return (
      <DefaultLayout title="Weight">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>
                <i class="fas fa-weight mr-2"></i>Weight
              </h3>
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
                  style={{ "border-radius": "5%" }}
                >
                  <i class="fas fa-plus-circle mr-2"></i>record
                </button>
              </p>
            </div>
            <div className="col">
              <form>
                <div class="form-row align-items-center">
                  <div class="col-auto my-1">
                    <select
                      class="custom-select mr-sm-2"
                      id="getWeightRecordsByPet"
                    >
                      {petOptions}
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <canvas id="myChart" width="400" height="400"></canvas>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table
                id="weight-table"
                class="table table-striped table-bordered"
                width="100%"
              ></table>
            </div>
          </div>
        </div>
        <AddWeightModal pets={this.props.allPets} />
        <script src="/weight.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
