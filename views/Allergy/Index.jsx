const React = require("react");
const Footer = require("../UI/Footer");

class Index extends React.Component {
  render() {
    let allAllergies = "";

    if (this.props.allAllergies) {
      allAllergies = this.props.allAllergies.map(allergy => (
        <React.Fragment>
          <p>Allergy: {allergy.symptom}</p>
          <p>Food: {allergy.food}</p>
          <p>Kibbles: {allergy.kibbles_id}</p>
          <hr/>
        </React.Fragment>
      ));
    }

    return (
      <html>
        <head />
        <body>
          <h3>Allergy</h3>
          <p><a href="/allergy/add">Add a new allergy</a></p>
          {allAllergies}
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Index;
