const React = require("react");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    let msg = "";

    if (this.props.msg) {
      msg = (
        <div class="alert alert-danger" role="alert">
          <u><a class="text-reset" href="/login">{this.props.msg}</a></u>
        </div>
      );
    }
    return (
      <DefaultLayout title="Home">
        <div className="container">
          <div className="row">
            <div className="col">
              {msg}
              <h3>Sign Up</h3>
              <form method="POST" action="/register">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Sign Up
                </button>
              </form>
              <p className="mt-3">
                <a href="/login">Have an account? Log in</a>
              </p>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
