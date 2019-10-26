const React = require("react");

class AddModal extends React.Component {
  render() {
      // console.log("*** this.props ***", this.props);

    return (
      <div
        class="modal fade"
        id="addFeedingKibblesModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addFeedingKibblesModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addFeedingKibblesModalLabel">
                Add Kibbles to Feeding Plan
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
                      Feeding Plan
                    </button>
                  </div>
                  <select
                    class="custom-select"
                    id="record-feeding-id"
                    name="record-feeding-id"
                    aria-label="Example select with button addon"
                  >
                    <option selected>Choose Feeding Plan...</option>
                    {/* { petOptions } */}
                    <option value="1">Feeding Plan 1</option>
                    <option value="2">Feeding Plan 2</option>
                    <option value="3">Feeding Plan 3</option>
                  </select>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">
                      Kibbles
                    </button>
                  </div>
                  <select
                    class="custom-select"
                    id="record-kibbles-id"
                    name="record-kibbles-id"
                    aria-label="Choose kibbles"
                  >
                    <option selected>Choose kibbles...</option>
                    {/* { petOptions } */}
                    <option value="1">Kibbles 1</option>
                    <option value="2">Kibbles 2</option>
                    <option value="3">Kibbles 3</option>
                  </select>
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addFeedingKibblesRecordBtn"
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
