const React = require("react");
const moment = require("moment");

class AddModal extends React.Component {
  render() {
    return (
      <div
        class="modal fade"
        id="addKibblesModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addKibblesModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addKibblesModalLabel">
                <i class="fas fa-plus-circle mr-2"></i>kibbles
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
                  <label for="record-brand">Brand</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-brand"
                    name="brand"
                    aria-describedby="brand"
                    placeholder="Enter brand"
                  />
                </div>
                <div class="form-group">
                  <label for="record-description">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    id="record-description"
                    name="description"
                    placeholder="Enter description"
                  />
                </div>
                <div class="form-group">
                  <label for="record-weight">Net Weight</label>
                  <input
                    type="number"
                    step="0.1"
                    class="form-control"
                    id="record-weight"
                    name="weight"
                    placeholder="Enter weight"
                  />
                </div>
                <div class="form-group">
                  <label for="record-price">Price</label>
                  <input
                    type="number"
                    step="0.1"
                    class="form-control"
                    id="record-price"
                    name="price"
                    placeholder="Enter price"
                  />
                </div>
                <div class="form-group">
                  <label for="date-purchased">Date of Purchase</label>
                  <input
                    type="date"
                    class="form-control"
                    id="record-date-purchased"
                    name="date_purchased"
                    defaultValue={moment().format("YYYY-MM-DD")}
                  />
                </div>
                <div class="form-group">
                  <label for="record-date-opened">Date Opened</label>
                  <input
                    type="date"
                    class="form-control"
                    id="record-date-opened"
                    name="date_opened"
                    defaultValue={moment().format("YYYY-MM-DD")}
                  />
                </div>
                <div class="form-group">
                  <label for="record-date-expiry">Date of Expiry</label>
                  <input
                    type="date"
                    class="form-control"
                    id="record-date-expiry"
                    name="date_expiry"
                    defaultValue={moment().format("YYYY-MM-DD")}
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addKibblesRecordBtn"
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
