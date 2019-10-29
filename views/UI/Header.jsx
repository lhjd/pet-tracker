const React = require("react");

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav
          id="myNavmenu"
          class="navmenu navmenu-default navmenu-fixed-left offcanvas"
          role="navigation"
        >
          <a class="navmenu-brand" href="#">
            <i class="fas fa-paw mr-2"></i>Petbook
          </a>

          <ul class="nav navmenu-nav flex-column">
            <li class="nav-item active">
              <a class="nav-link" href="/logout">
              <i class="fas fa-sign-out-alt mr-2"></i>Logout
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li> */}
          </ul>
        </nav>

        <header class="navbar navbar-light bg-light fixed-top">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="offcanvas"
            data-target="#myNavmenu"
            // data-canvas="body"
            data-backdrop="true"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </header>
      </React.Fragment>
    );
  }
}

module.exports = Header;
