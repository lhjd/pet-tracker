const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    console.log(
      "*** this.props.allAppointments ***",
      this.props.allAppointments
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
            <div className="col">{allAppointments}</div>
          </div>
        </div>
        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
