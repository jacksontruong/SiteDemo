//Start of Feed Class, With ES6 refactor
import {getInstagram} from "./api.js"

export default class Feed extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			numberOfCards: 10,
			instagram_data: [],
			reddit_data: [],
			youtube_data: [],
			twitter_data: []
		};
		this.add_Feed_Card = this.add_Feed_Card.bind(this)
		this.fill_Feed = this.fill_Feed.bind(this)
		this.success_Callback = this.success_Callback.bind(this)
	}

	componentDidMount(){
		getInstagram(this.success_Callback,10);
	}

	add_Feed_Card(title, description, imageSrc, timestamp, num) {
		return (
			<div key={"div-wrap"+num}>
				<hr></hr>
				<div className="row feed-card" key={"div-box"+num}>
					<div className="col-sm-4 text-center align-middle" key={"div-pic"+num}>
						<img src={imageSrc} className="rounded w-100" alt="..."></img>
						<span>{timestamp}</span>
					</div>
					<div className="col-sm-8 align-middle" key={"div-text"+num}>
						<h4 className="purple-text" key={"title"+num}>Profile Name</h4>
						<hr></hr>
						<span>{description}</span>
					</div>
				</div>
			</div>
		)
	}

	fill_Feed(){
		var array = [];
		for(var x in this.state.instagram_data){
			console.log(this.state.instagram_data[x])
		    array.push(this.add_Feed_Card(
		    	"title", 
		    	this.state.instagram_data[x].text, 
		    	this.state.instagram_data[x].img.url, 
		    	this.state.instagram_data[x].time, 
		    	x
		    ));
		}
		return array;
	}

	success_Callback(data){
		var instagram_array = [];
		for(var x in data){
			var obj = {
				text: data[x].caption.text,
				img: data[x].images.standard_resolution,
				link: data[x].link,
				time: data[x].created_time
			}
			instagram_array.push(obj);
		}
		this.setState({instagram_data: instagram_array});
	}

	render() {
		return (
			<div className="container">
				{this.fill_Feed()}
				<hr></hr>
				<button type="button" className="btn btn-primary btn-lg btn-block purple-button">Load More</button>
			</div>
		)
	}
}