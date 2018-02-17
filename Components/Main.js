//Start of Main Class, With ES6 refactor
var Main = class Welcome extends React.Component {
  render() {
    return <h1>Hello Jackson!</h1>;
  }
}

ReactDOM.render(React.createElement(Main),document.getElementById('root'));