//Start of Feed Class, With ES6 refactor
import {API} from "./api.js"

export default class Feed extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numberOfCards: 1
		};
		this.addFeedCard = this.addFeedCard.bind(this)
		this.fillFeed = this.fillFeed.bind(this)
	}

	addFeedCard(title, description, imageSrc, timestamp, num) {
		return (
			<div key={"div-wrap"+num}>
				<hr></hr>
				<div className="row feed-card" key={"div-box"+num}>
					<div className="col-sm-4 text-center align-middle" key={"div-pic"+num}>
						<img src="../../resources/bg.svg" className="rounded" alt="..."></img>
						<span> 2/19/2018 @ 12:00am </span>
					</div>
					<div className="col-sm-8 align-middle" key={"div-text"+num}>
						<h4 className="purple-text" key={"title"+num}>Profile Name</h4>
						<hr ></hr>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</div>
				</div>

			</div>
		)
	}

	fillFeed(){
		var array = [];
		for (var i = 0; i < this.state.numberOfCards; i++) { 
		    array.push(this.addFeedCard("title", "description", "imageSrc","date",i));
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