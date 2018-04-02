//Start of Feed Class, With ES6 refactor
import {getInstagram} from "./api.js"
import {epochToLocal} from "./helper.js"

export default class Feed extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numberOfCards: 5,
			feed_data: [],
		};
		this.success_Callback = this.success_Callback.bind(this);
		this.add_Feed_Card = this.add_Feed_Card.bind(this);
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

	add_Feed_Card(card, num) {
		var title = card.title;
		var link = card.link;
		var description = card.description;
		var imageSrc = card.image;
		var timestamp = epochToLocal(card.time);
		var num = num;

		return (
			<div key={"div-wrap"+num}>
				<hr></hr>
				<div className="row feed-card" key={"div-box"+num}>
					<div className="col-sm-4 text-center align-middle" key={"div-pic"+num}>
						<img src={imageSrc} className="rounded w-100" alt="..."></img>
						<span>{timestamp}</span>
					</div>
					<div className="col-sm-8 align-middle" key={"div-text"+num}>
						<h4 className="purple-text" key={"title"+num}>{title}</h4>
						<hr></hr>
						<span>{description}</span>
					</div>
				</div>
			</div>
		)
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
			feed.push(this.add_Feed_Card(currentFeed[x],x));
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