const React = require("react");
const moment = require("moment");

class AddAppointmentModal extends React.Component {
  render() {
    // console.log("*** clinics ***", this.props.clinics);
    // console.log("*** pets ***", this.props.pets);

    let clinicOptions = [];
    if (this.props.clinics) {
      clinicOptions = this.props.clinics.map(clinic => (
        <option value={clinic.id}>{clinic.name}</option>
      ));
    }

    let petOptions = [];
    if (this.props.pets) {
      petOptions = this.props.pets.map(pet => (
        <option value={pet.id}>{pet.name}</option>
      ));
    }

    return (
      <div
        class="modal fade"
        id="addAppointmentModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addAppointmentModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addAppointmentModalLabel">
                <i class="fas fa-plus-circle mr-2"></i>appointment
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
                      Pet
                    </button>
                  </div>
                  <select
                    class="custom-select"
                    id="record-pet-id"
                    name="record-pet-id"
                    aria-label="Choose pet"
                  >
                    <option selected>Choose pet...</option>
                    {petOptions}
                  </select>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="button">
                      Clinic
                    </button>
                  </div>
                  <select
                    class="custom-select"
                    id="record-clinic-id"
                    name="record-clinic-id"
                    aria-label="Choose clinic"
                  >
                    <option selected>Choose clinic...</option>
                    {clinicOptions}
                  </select>
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
                <div class="form-group">
                  <label for="date">Time</label>
                  <input
                    type="time"
                    class="form-control"
                    id="record-time"
                    name="time"
                    defaultValue={moment().format("LT")}
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-primary btn-warning"
                  id="addAppointmentBtn"
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

module.exports = AddAppointmentModal;
