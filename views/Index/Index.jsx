const React = require("react");
const DefaultLayout = require("../Layout/DefaultLayout");
const AddPetModal = require("../Index/AddPetModal");

class Index extends React.Component {
  render() {
    // console.log("*** this.props ***", this.props.random);

    let allPets = "";
    if (this.props.allPets) {
      allPets = this.props.allPets.map(pet => (
        <li>
          <p>{pet.name}</p>
        </li>
      ));
    }

    return (
      <DefaultLayout title="Home">
        <div
          className="container"
          style={{ "margin-bottom": "100px", "margin-top": "10px" }}
        >
          <div className="row">
            <div className="col text-center">
              <h3>Home</h3>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button
                id="fetch-random-dog-photo"
                type="button"
                className="btn btn-primary"
              >
                Fetch!
              </button>
            </div>
            <div className="col text-center">
              <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target="#addPetModal"
                style={{ "border-radius": "5%" }}
              >
                <i class="fas fa-plus-circle mr-2"></i>Pet
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
          <div className="row">
            <div className="col">
              <h6><i class="fas fa-dog mr-2"></i>
              { allPets.length > 1 ? "My Pets" : "My Pet"}
              </h6>
              <ol>{allPets}</ol>
              <hr />
            </div>
          </div>
        </div>
        <AddPetModal />
        <script src="/home.js"></script>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
