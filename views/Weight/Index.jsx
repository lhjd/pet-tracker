const React = require("react");
const Footer = require("../UI/Footer");

class Index extends React.Component {
  render() {
    let allWeight = (
      <div>
        {this.props.allWeight.map(weight => (
          <React.Fragment>
            <p key={weight.date.toString()}>{weight.date.toString()}</p>
            <p key={weight.record}>{weight.record}</p>
            <hr/>
          </React.Fragment>
        ))}
      </div>
    );

    return (
      <html>
        <head />
        <body>
          <h3>Weight</h3>
          <div>
            <p>
              <a href="/weight/add">Add new weight record</a>
            </p>
          </div>
          {allWeight}
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Index;
