const React = require("react");
const moment = require("moment");

class AddWeightModal extends React.Component {
  render() {
    // console.log("*** this.props.pets ***", this.props.pets);

    let petOptions = [];
    if (this.props.pets) {
      petOptions = this.props.pets.map((pet, index) => {
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
      <div
        class="modal fade"
        id="addWeightModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <i class="fas fa-plus-circle mr-2"></i> weight record
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-secondary" type="button">
                        For
                      </button>
                    </div>
                    <select
                      class="custom-select"
                      id="record-pet-id"
                      name="record-pet-id"
                      aria-label="Choose pet"
                    >
                      {petOptions}
                    </select>
                  </div>

                  <label for="weight">Weight</label>
                  <input
                    type="number"
                    step="0.1"
                    class="form-control"
                    id="record-weight"
                    name="weight"
                    aria-describedby="weight"
                    placeholder="Enter weight"
                  />
                </div>
                <div class="form-group">
                  <label for="date">Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="record-date"
                    name="date"
                    defaultValue={moment().format("YYYY-MM-DD")}
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addWeightRecordBtn"
                  defaultValue="Add"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AddWeightModal;
