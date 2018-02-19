//Start of Main Class, With ES6 refactor

import Nav from './Nav.js';
import SideNav from './SideNav.js';


var Main = class Container extends React.Component {
  render() {
    return (
    	<div>
	    	<Nav></Nav>
	   		<SideNav></SideNav>
   		</div>
    )
  }
}

ReactDOM.render(React.createElement(Main),document.getElementById('root'));