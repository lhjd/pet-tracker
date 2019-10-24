const React = require("react");
const moment = require("moment");

class AddModal extends React.Component {
  render() {
    // let addedWeightMsg = "";
    // if (this.props.addedWeight) {
    //   const record = this.props.addedWeight[0].record.toString();
    //   const date = this.props.addedWeight[0].date.toString();
    //   addedWeightMsg = (
    //     <p>
    //       Added weight: {record} kg on {date}.
    //     </p>
    //   );
    // }

    return (
      //   <DefaultLayout title="Add Weight Record">
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
                Add Weight Record
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
              {/* <h3>Add Weight Record</h3> */}
              {/* {addedWeightMsg} */}
              <form>
                <div class="form-group">
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
                <input type="submit" class="btn btn-primary btn-warning" id="addWeightRecordBtn" defaultValue="Add"/>
                  {/* Add
                </button> */}
              </form>
              {/* <form action="/weight" method="POST">
                <input type="date" name="date" placeholder="date" />
                <br />
                <input
                  type="number"
                  step="0.1"
                  name="record"
                  placeholder="weight in kg"
                />
                <br />
                <input type="submit" />
              </form> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AddModal;
