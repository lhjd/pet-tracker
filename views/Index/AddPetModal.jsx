const React = require("react");
const moment = require("moment");

class AddPetModal extends React.Component {
  render() {
    return (
      <div
        class="modal fade"
        id="addPetModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addPetModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addPetModalLabel">
                <i class="fas fa-plus-circle mr-2"></i>pet
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
                  <label for="date">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-name"
                    name="name"
                    placeholder="Enter pet's name"
                  />
                </div>
                <div class="form-group">
                  <label for="date">Breed</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-breed"
                    name="breed"
                    placeholder="Enter pet's breed"
                  />
                </div>
                <div class="form-group">
                  <label for="date">Date of Birth</label>
                  <input
                    type="date"
                    class="form-control"
                    id="record-dob"
                    name="dob"
                    defaultValue={moment().format("YYYY-MM-DD")}
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addPetBtn"
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

module.exports = AddPetModal;
