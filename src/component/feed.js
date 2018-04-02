//Start of Feed Class, With ES6 refactor
import {getInstagram} from "./api.js"
import Card from './Card.js';

export default class Feed extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numberOfCards: 5,
			feed_data: [],
		};
		this.success_Callback = this.success_Callback.bind(this);
		this.generate_Feed = this.generate_Feed.bind(this);
		this.load_More = this.load_More.bind(this);
	}

	componentDidMount(){
		getInstagram(this.success_Callback,10);
	}

	success_Callback(data){ //add new data to existing storage while sorting by earliest
		var temp_feed_data = this.state.feed_data;
		temp_feed_data = temp_feed_data.concat(data);
		temp_feed_data = temp_feed_data.sort(function(a,b) {return a.time - b.time});
		this.setState({feed_data: temp_feed_data});
	}

	generate_Feed() {
		var currentFeed = [];
		var feedCountMax = this.state.numberOfCards;
		if(feedCountMax > this.state.feed_data.length){
			//fetch more cards and update currentFeed
			currentFeed = this.state.feed_data;
			console.log("No more content");
		}
		else{
			currentFeed = this.state.feed_data.slice(0,feedCountMax)
		}

		var feed = [];
		for(var x in currentFeed){
			feed.push(<Card card={currentFeed[x]} num={x} key={"card-"+x}></Card>);
		}
		return feed;
	}

	load_More() {
		console.log("Loading More...");
		var count = this.state.numberOfCards + 1;
		this.setState({numberOfCards: count});
	}

	render() {
		return (
			<div className="container">
				{this.generate_Feed()}
				<hr></hr>
				<button type="button" className="btn btn-primary btn-lg btn-block purple-button" onClick={this.load_More}>Load More</button>
			</div>
		)
	}
}