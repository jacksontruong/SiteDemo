import {epochToLocal} from "./helper.js"

//Start of Card Class, With ES6 refactor
export default class Card extends React.Component {
	constructor(props) {
		super(props);

		console.log(props);

		this.state = {
			title: props.card.title,
			link: props.card.link,
			description: props.card.description,
			imageSrc: props.card.image,
			timestamp: epochToLocal(props.card.time),
			num: props.num
		};
	}
 	render() {
	    return (
			<div key={"div-wrap"+this.state.num}>
				<hr></hr>
				<div className="row feed-card" key={"div-box"+this.state.num}>
					<div className="col-sm-4 text-center align-middle" key={"div-pic"+this.state.num}>
						<img src={this.state.imageSrc} className="rounded w-100" alt="..."></img>
						<span>{this.state.timestamp}</span>
					</div>
					<div className="col-sm-8 align-middle" key={"div-text"+this.state.num}>
						<h4 className="purple-text" key={"title"+this.state.num}>{this.state.title}</h4>
						<hr></hr>
						<span>{this.state.description}</span>
					</div>
				</div>
			</div>
	    )
	}
}