const React = require("react");

class Footer extends React.Component {
  render() {
    return <footer>
        <ul>
            <li key="index"><a href="/">Index</a></li>
            <li key="appointment"><a href="/appointment">Appointment</a></li>
            <li key="weight"><a href="/weight">Weight</a></li>
            <li key="allergy"><a href="/allergy">Allergy</a></li>
            <li key="kibbles"><a href="/kibbles">Kibbles</a></li>
        </ul>
    </footer>;
  }
}

module.exports = Footer;
