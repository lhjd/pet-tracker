const React = require("react");
const moment = require("moment");

class AddClinicModal extends React.Component {
  render() {
    return (
      <div
        class="modal fade"
        id="addClinicModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addClinicModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addClinicModalLabel">
                <i class="fas fa-plus-circle mr-2"></i>clinic
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
                  <label for="record-name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-name"
                    name="name"
                    aria-describedby="clinic name"
                    placeholder="Enter clinic name"
                  />
                </div>
                <div class="form-group">
                  <label for="record-address">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-address"
                    name="address"
                    placeholder="Enter clinic address"
                  />
                </div>
                <div class="form-group">
                  <label for="record-phone">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    id="record-phone"
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addClinicBtn"
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

module.exports = AddClinicModal;
