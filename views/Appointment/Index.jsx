const React = require("react");
const Footer = require("../UI/Footer");

class Index extends React.Component {
  render() {
    console.log("*** this.props.allAppointments ***", this.props.allAppointments);

    let allAppointments = [];

    allAppointments = this.props.allAppointments.map(appointment => (
        <ul>
          <li>Date:{appointment.date.toString()}</li>
          <li>Time:{appointment.time.toString()}</li>
          <li>Clinic:{appointment.name}</li>
          <li>Address:{appointment.address}</li>
          <li>Phone:{appointment.phone}</li>
          <li>Email:{appointment.email}</li>
        </ul>
    ));

    return (
      <html>
        <head />
        <body>
          <h3>Appointment</h3>
          { allAppointments }
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Index;
