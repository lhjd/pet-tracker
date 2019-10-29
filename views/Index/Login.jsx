const React = require("react");
const DefaultLayout = require("../Layout/DefaultLayout");

class Index extends React.Component {
  render() {
    let msg = "";
    if (this.props.msg) {
      msg = (
        <div className="alert alert-danger" role="alert">
          {this.props.msg}
        </div>
      );
    }

    return (
      <DefaultLayout title="Home">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Login</h3>
              {msg}
              <form method="POST" action="/login">
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
                  Login
                </button>
              </form>
              <p className="mt-3">
                <a href="/register">Sign up for an account</a>
              </p>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
