const React = require("react");
const Footer = require("../UI/Footer");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title="Kibbles">
        <h3>Kibbles</h3>
        <Footer />
      </DefaultLayout>
    );
  }
}

module.exports = Index;
