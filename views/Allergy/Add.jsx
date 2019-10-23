const React = require("react");
const Footer = require("../UI/Footer");

class Add extends React.Component {
  render() {
    console.log("*** this.props.addedAllergy ***", this.props.addedAllergy );
    let addedAllergyMsg = "";
    if (this.props.addedAllergy) {
    const { symptom, food, kibbles_id } = this.props.addedAllergy[0];
      // const symptom = this.props.addedAllergy[0].symptom;
      // const food = this.props.addedAllergy[0].food;
      // const kibbles_id = this.props.addedAllergy[0].kibbles_id;
      addedAllergyMsg = <p>Added allergy: {symptom}, {food}, {kibbles_id}.</p>
    }

    return (
      <html>
        <head />
        <body>
          <h3>Add Allergy</h3>
          {addedAllergyMsg}
          <form action="/allergy" method="POST">
            <select name="kibbles_id">
              <option value="1">Hill's Science</option>
            </select>
            <br />
            <input type="text" name="symptom" placeholder="symptoms" />
            <br/>
            <input type="text" name="food" placeholder="allergic food" />
            <br />
            <input type="submit" />
          </form>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Add;
