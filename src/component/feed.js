//Start of Feed Class, With ES6 refactor
export default class Feed extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numberOfCards: 5
		};
		this.addFeedCard = this.addFeedCard.bind(this)
		this.fillFeed = this.fillFeed.bind(this)
	}

	addFeedCard(title, description, imageSrc) {
		return (
			<div>
				<hr></hr>

				<div className="row feed-card">
					<div className="col-sm-4 text-center align-middle">
						<img src="../../resources/bg.svg" className="rounded" alt="..."></img>
					</div>
					<div className="col-sm-8 align-middle">
						<h4 className="purple-text">Profile Name</h4>
						<hr></hr>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</div>
				</div>

			</div>
		)
	}

	fillFeed(){
		var array = [];
		for (var i = 0; i < this.state.numberOfCards; i++) { 
		    array.push(this.addFeedCard("title", "description", "imageSrc"));
		}
		return array;
	}

	render() {
		return (
			<div className="container">
				{this.fillFeed()}
				<hr></hr>
				<button type="button" className="btn btn-primary btn-lg btn-block purple-button">Load More</button>
			</div>
		)
	}
}