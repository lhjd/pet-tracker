const React = require("react");

class Footer extends React.Component {
  render() {
    return <footer>
        <ul>
            <li><a href="/vet">Vet</a></li>
            <li><a href="/weight">Weight</a></li>
            <li><a href="/allergy">Allergy</a></li>
            <li><a href="/kibbles">Kibbles</a></li>
        </ul>
    </footer>;
  }
}

module.exports = Footer;
