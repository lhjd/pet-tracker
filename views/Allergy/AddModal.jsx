const React = require("react");

class AddModal extends React.Component {
  render() {
    return (
      <div
        class="modal fade"
        id="addAllergyModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addAllergyModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addAllergyModalLabel">
                Add Allergy Record
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
                <div class="form-group">
                  <label for="weight">Allergy</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-symptom"
                    name="symptom"
                    aria-describedby="symptom"
                    placeholder="Enter symptom"
                  />
                </div>
                <div class="form-group">
                  <label for="date">Food</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-food"
                    name="food"
                    placeholder="Enter food"
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addAllergyRecordBtn"
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
