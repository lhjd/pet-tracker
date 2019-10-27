const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddClinicModal = require("../Appointment/AddClinicModal");

class Index extends React.Component {
  render() {
    // console.log(
    //   "*** this.props.allAppointments ***",
    //   this.props.allAppointments
    // );
    console.log(
      "*** this.props.allClinicsByUser ***",
      this.props.allClinicsByUser
    );

    let allAppointments = [];

    allAppointments = this.props.allAppointments.map(appointment => (
      <div>
        <p>
          <strong>{appointment.name}</strong>
        </p>
        <p>Pet: {appointment.pet_name}</p>
        <p>Date:{appointment.date.toString()}</p>
        <p>Time:{appointment.time.toString()}</p>
        <p>Clinic:{appointment.clinic_name}</p>
        <p>Address:{appointment.address}</p>
        <p>Phone:{appointment.phone}</p>
        <hr />
      </div>
    ));

    return (
      <DefaultLayout title="Appointments">
        <div
          className="container"
          style={{ "margin-bottom": "100px", "margin-top": "10px" }}
        >
          <div className="row">
            <div className="col">
              <h3>Appointment</h3>
              <p>
                <a href="/appointment/add">Add a new appointment</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addClinicModal"
                style={{ "border-radius": "5%", width: "120px" }}
              >
                <i class="fas fa-plus-circle mr-2"></i>clinic
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">{allAppointments}</div>
          </div>
        </div>
        <Footer />
        <AddClinicModal/>
        <script src="/appointment.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
