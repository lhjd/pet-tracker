const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    let addedWeightMsg = "";
    if (this.props.addedWeight) {
      const record = this.props.addedWeight[0].record.toString();
      const date = this.props.addedWeight[0].date.toString();
      addedWeightMsg = (
        <p>
          Added weight: {record} kg on {date}.
        </p>
      );
    }

    return (
      <DefaultLayout title="Add Weight Record">
        <h3>Add Weight Record</h3>
        {addedWeightMsg}
        <form action="/weight" method="POST">
          <input type="date" name="date" placeholder="date" />
          <br />
          <input type="number" step="0.1" name="record" placeholder="weight in kg" />
          <br />
          <input type="submit" />
        </form>
        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
