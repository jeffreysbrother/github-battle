var React = require('react');
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>Hello, {this.props.name}</h1>
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(
//   <HelloWorld name="James" />,
//   document.getElementById('app')
// );

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend) {
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

var FriendsContainer = React.createClass({
  render: function() {
    var name = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
);
