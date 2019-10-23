const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title="Home">
        <h3>Home</h3>
        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
