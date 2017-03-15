var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld name="James" />,
  document.getElementById('app')
);
