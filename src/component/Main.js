//Start of Main Class, With ES6 refactor

import Nav from './Nav.js';
import SideNav from './Profile.js';
import Feed from './Feed.js';

var Main = class Container extends React.Component {
  render() {
    return (
    	<div>
	    	<Nav></Nav>
	   		<SideNav></SideNav>
	   		<Feed></Feed>
   		</div>
    )
  }
}

ReactDOM.render(React.createElement(Main),document.getElementById('root'));