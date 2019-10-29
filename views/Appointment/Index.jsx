const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddClinicModal = require("../Appointment/AddClinicModal");
const AddAppointmentModal = require("../Appointment/AddAppointmentModal");
const moment = require("moment");

class Index extends React.Component {
  render() {
    let allAppointmentsByUser = [];

    if (this.props.allAppointmentsByUser) {
      allAppointmentsByUser = this.props.allAppointmentsByUser.map(
        appointment => (
          <div>
            <p>
              <strong>{appointment.name}</strong>
            </p>
            <p>Pet: {appointment.pet_name}</p>
            <p>Date:{moment(appointment.date).format("L")}</p>
            <p>Time:{moment(appointment.time).format("LT")}</p>
            <p>Clinic:{appointment.clinic_name}</p>
            <p>Address:{appointment.address}</p>
            <p>Phone:{appointment.phone}</p>
            <hr />
          </div>
        )
      );
    }

    return (
      <DefaultLayout title="Appointments">
        <div className="container">
          <div className="row my-2">
            <div className="col">
              <h3>
                <i class="fas fa-calendar-alt mr-2"></i>Appointment
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addClinicModal"
                style={{ "border-radius": "5%", width: "150px" }}
              >
                <i class="fas fa-plus-circle mr-2"></i>clinic
              </button>
            </div>
            <div className="col text-center">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addAppointmentModal"
                style={{ "border-radius": "5%", width: "150px" }}
              >
                <i class="fas fa-plus-circle mr-2"></i>appointment
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">{allAppointmentsByUser}</div>
          </div>
        </div>
        <Footer />
        <AddClinicModal />
        <AddAppointmentModal
          clinics={this.props.allClinicsByUser}
          pets={this.props.allPetsByUser}
        />
        <script src="/appointment.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
