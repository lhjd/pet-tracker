const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    // console.log("*** this.props.allAppointments ***", this.props.allAppointments);

    let allAppointments = [];

    allAppointments = this.props.allAppointments.map(appointment => (
      <div>
        <p>Date:{appointment.date.toString()}</p>
        <p>Time:{appointment.time.toString()}</p>
        <p>Clinic:{appointment.name}</p>
        <p>Address:{appointment.address}</p>
        <p>Phone:{appointment.phone}</p>
        <p>Email:{appointment.email}</p>
        <hr />
      </div>
    ));

    return (
      <DefaultLayout title="Appointments">
        <h3>Appointment</h3>
        <p>
          <a href="/appointment/add">Add a new appointment</a>
        </p>
        {allAppointments}
        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
