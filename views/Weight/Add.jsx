const React = require("react");
const Footer = require("../UI/Footer");

class Index extends React.Component {
  render() {
    // console.log("*** this.props.addedWeight ***", this.props.addedWeight );
    let addedWeightMsg = "";
    if (this.props.addedWeight) {
      // const { record, date } = this.props.addedWeight[0];
      const record = this.props.addedWeight[0].record.toString();
      const date = this.props.addedWeight[0].date.toString();
      // console.log("*** this.props.addedWeight[0] ***", this.props.addedWeight[0]);
      // console.log("*** record ***", record);
      // console.log("*** typeof record ***", typeof(record));
      // console.log("*** date ***", date);
      // console.log("*** typeof date ***", typeof(date));
      addedWeightMsg = <p>Added weight: {record} kg on {date}.</p>
    }

    return (
      <html>
        <head />
        <body>
          <h3>Add Weight</h3>
          {addedWeightMsg}
          <form action="/weight/add" method="POST">
              <input type="date" name="date" placeholder="date" /><br/>
              <input type="number" name="record" placeholder="weight in kg" /><br/>
              <input type="submit"/>
          </form>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Index;
