//Start of Main Class, pre ES6 refactor
var Main = React.createClass({displayName: "Main",
	render: function() {
		return React.createElement("div",null,"Hello World!");
	}
}); //end of Main

ReactDOM.render(React.createElement(Main),document.getElementById('root'));