const React = require("react");

class AddModal extends React.Component {
  render() {
      // console.log("*** this.props.pets ***", this.props.pets);

      const petOptions = this.props.pets.map(pet => (
              <option value={pet.pet_id}>{pet.name}</option>
      ))

    //   <option value="1">Pet 1</option>
    //   <option value="2">Pet 2</option>
    //   <option value="3">Pet 3</option>


    return (
      <div
        class="modal fade"
        id="addFeedingModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addFeedingModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addFeedingModalLabel">
                Add Feeding Plan
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
              <form action="#">
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
                    <option selected>Choose pet...</option>
                    { petOptions }
                    {/* <option value="1">Pet 1</option>
                    <option value="2">Pet 2</option>
                    <option value="3">Pet 3</option> */}
                  </select>
                </div>
                <div class="form-group">
                  <label for="record-daily-frequency">Daily Frequency</label>
                  <input
                    type="number"
                    class="form-control"
                    id="record-daily-frequency"
                    name="daily_frequency"
                    aria-describedby="daily frequency"
                    placeholder="Enter daily freqency"
                  />
                </div>
                <div class="form-group">
                  <label for="record-portion-weight">Portion Weight</label>
                  <input
                    type="number"
                    step="0.1"
                    class="form-control"
                    id="record-portion-weight"
                    name="portion_weight"
                    placeholder="Enter portion weight"
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addFeedingRecordBtn"
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

module.exports = AddModal;
