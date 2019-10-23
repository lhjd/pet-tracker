const React = require("react");
const Footer = require("../UI/Footer");

class Index extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Weight</h3>
          <ul>
            <li><a href="/weight/add">Add new weight record</a></li>
          </ul>
          <Footer />
        </body>
      </html>
    );
  }
}

module.exports = Index;
