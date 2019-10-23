const React = require("react");

class Footer extends React.Component {
  render() {
    return (
      <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <a class="navbar-brand text-center" href="/">
          <i class="fas fa-home"></i>
          <h6 class="icon-text">Home</h6>
        </a>
        <a class="navbar-brand text-center" href="/appointment">
          <i class="fas fa-calendar-alt"></i>
          <h6 class="icon-text">Appointment</h6>
        </a>
        <a class="navbar-brand text-center" href="/weight">
          <i class="fas fa-weight"></i>
          <h6 class="icon-text">Weight</h6>
        </a>
        <a class="navbar-brand text-center" href="/kibbles">
          <i class="fas fa-ring"></i>
          <h6 class="icon-text">Kibbles</h6>
        </a>
        <a class="navbar-brand text-center" href="/allergy">
          <i class="fas fa-bomb"></i>
          <h6 class="icon-text">Allergy</h6>
        </a>
      </nav>

      // <footer>
      //   <ul>
      //     <li>
      //       <a href="/">Home</a>
      //     </li>
      //     <li>
      //       <a href="/appointment">Appointment</a>
      //     </li>
      //     <li>
      //       <a href="/weight">Weight</a>
      //     </li>
      //     <li>
      //       <a href="/allergy">Allergy</a>
      //     </li>
      //     <li>
      //       <a href="/kibbles">Kibbles</a>
      //     </li>
      //   </ul>
      // </footer>
    );
  }
}

module.exports = Footer;
