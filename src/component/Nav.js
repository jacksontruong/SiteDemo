//Start of Nav Class, With ES6 refactor
export default class Nav extends React.Component {
  render() {
    return (
		<nav className="navbar navbar-light">
			<a className="navbar-brand" href="#">
				<img src="../../resources/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top mr-2" alt=""></img>
				<span> Sociality </span>
			</a>
			<div className="float-right">
				<img src="../../resources/account.png" width="30" height="30" className="d-inline-block align-top mr-2" alt=""></img>
				<img src="../../resources/cog.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
		    </div>
		</nav>
    )
  }
}