const React = require("react");
const Footer = require("../UI/Footer");

class Index extends React.Component {
  render() {
    console.log(
      "*** this.props.addedAppointment ***",
      this.props.addedAppointment
    );
    let addedAppointmentMsg = "";
    if (this.props.addedAppointment) {
      const clinic_id = this.props.addedAppointment[0].clinic_id.toString();
      const date = this.props.addedAppointment[0].date.toString();
      const time = this.props.addedAppointment[0].time.toString();
      console.log("clinic_id, date, time", clinic_id, date, time);
      addedAppointmentMsg = <div>
        <p>Added appointment:</p>
        <p>Clinic: {clinic_id}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>;
    }

    return (
      <html>
        <head />
        <body>
          <h3>Add Appointment</h3>
          {addedAppointmentMsg}
          <form action="/appointment" method="POST">
            <select name="clinic_id">
              <option value="1">Island Vet</option>
            </select>
            <br />
            <input type="date" name="date" placeholder="date" />
            <br />
            <input type="time" name="time" placeholder="time" />
            <br />
            <input type="submit" />
          </form>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Index;
