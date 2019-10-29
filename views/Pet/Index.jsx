const React = require("react");
const DefaultLayout = require("../Layout/DefaultLayout");
const moment = require("moment");

class Index extends React.Component {
  render() {
    console.log("*** this.props.pet ***", this.props.pet);
    let dob = "";
    if (this.props.pet[0].dob) {
        dob = moment(this.props.pet[0].dob).format("L");
    }

    let name = "";
    if (this.props.pet[0].name) {
        name = this.props.pet[0].name;
    }

    let breed = "";
    if (this.props.pet[0].breed) {
        breed = this.props.pet[0].breed;
    }

    return (
      <DefaultLayout title="Pet">
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card mx-auto" style={{"width":"18rem"}}>
                <img src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="pet picture" />
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text">
                     Born on: {dob}
                  </p>
                  <p class="card-text">
                     Breed: {breed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
