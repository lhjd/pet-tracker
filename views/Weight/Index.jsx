const React = require("react");
const Footer = require("../UI/Footer");

class Index extends React.Component {
  render() {
    let allWeight = (
      <ul>
        {this.props.allWeight.map(weight => (
          <React.Fragment>
            <li>{weight.date.toString()}</li>
            <li>{weight.record}</li>
            <hr/>
          </React.Fragment>
        ))}
      </ul>
    );

    return (
      <html>
        <head />
        <body>
          <h3>Weight</h3>
          <ul>
            <li>
              <a href="/weight/add">Add new weight record</a>
            </li>
          </ul>
          {allWeight}
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Index;
