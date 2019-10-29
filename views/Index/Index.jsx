const React = require("react");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    // console.log("*** this.props ***", this.props.random);
    return (
      <DefaultLayout title="Home">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3>Home</h3>
              <button
                id="fetch-random-dog-photo"
                type="button"
                className="btn btn-primary"
              >
                Fetch!
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col text-center m-5">
              <img
                id="random-dog-photo"
                src={this.props.random.message}
                alt="Random Dog Photo"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
        <script src="/home.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
