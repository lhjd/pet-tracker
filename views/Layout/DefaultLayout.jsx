const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
        {this.props.children}
        <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
