//Start of Main Class, With ES6 refactor

import Nav from './Nav.js';

var Main = class Container extends React.Component {
  render() {
    return (
    	<div className="Test">
    		<Nav></Nav>
   		</div>
    )
  }
}

ReactDOM.render(React.createElement(Main),document.getElementById('root'));