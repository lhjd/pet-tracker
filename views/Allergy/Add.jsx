const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");

class Add extends React.Component {
  render() {
    let addedAllergyMsg = "";
    if (this.props.addedAllergy) {
      const { symptom, food, kibbles_id } = this.props.addedAllergy[0];
      addedAllergyMsg = (
        <p>
          Added allergy: {symptom}, {food}, {kibbles_id}.
        </p>
      );
    }

    return (
      <DefaultLayout title="New Allergy">
        <h3>Add Allergy</h3>
        {addedAllergyMsg}
        <form action="/allergy" method="POST">
          <select name="kibbles_id">
            <option value="1">Hill's Science</option>
          </select>
          <br />
          <input type="text" name="symptom" placeholder="symptoms" />
          <br />
          <input type="text" name="food" placeholder="allergic food" />
          <br />
          <input type="submit" />
        </form>
        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Add;
