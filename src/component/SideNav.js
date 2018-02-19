//Start of Side Nav Class, With ES6 refactor
export default class SideNav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			platformToggles: [
				{platform : "Reddit", toggle: false},
			    {platform : "Twitter", toggle: false},
			    {platform : "Instagram", toggle: false},
			    {platform : "Youtube", toggle: false},
			    {platform : "Facebook", toggle: false}
			],
			allToggle: true
		};

		this.platformToggler = this.platformToggler.bind(this)
		this.buildSocialAccounts = this.buildSocialAccounts.bind(this)
		this.buildAllAccountTab = this.buildAllAccountTab.bind(this)
		this.buildSocialAccountTab = this.buildSocialAccountTab.bind(this)
	}

	platformToggler(e){
		if(e.target.id != "All"){
			var tempArray = this.state.platformToggles
			tempArray.find(x => x.platform === e.target.id).toggle = ((tempArray.find(x => x.platform === e.target.id).toggle) === true ? false : true); 
			for (const key of Object.keys(tempArray)) {
				if(tempArray[key].toggle == true){
					this.setState({allToggle: false});
				}
			}
			this.setState({platformToggles: tempArray});
		}
		else{
			var tempArray = this.state.platformToggles;
			for (const key of Object.keys(tempArray)) {
				tempArray[key].toggle = false;
			}
			this.setState({allToggle: this.state.allToggle ? false : true, platformToggles: tempArray});
		}

	}

	buildSocialAccounts(social){

		//Test
		var social = [
		    {platform : "Reddit", account: "xChocobars"},
		    {platform : "Twitter", account: "xChocobars"},
		    {platform : "Instagram", account: "xChocobars"},
		    {platform : "Youtube", account: "xChocobars"},
		    {platform : "Facebook", account: "xChocobars"}
		];
		//Test

		var SocialAccounts = [];
		for (const key of Object.keys(social)) {
			SocialAccounts.push(this.buildSocialAccountTab(social[key].platform, social[key].account));
		}

		if(SocialAccounts.length >= 2){
			SocialAccounts.unshift(this.buildAllAccountTab())
		}

		return SocialAccounts;

	}

	buildAllAccountTab(){
		var activeButton = this.state.allToggle === true ? "active" : "";
		return(
			<label className={"btn btn-secondary "+activeButton}>
				<input id="All" type="checkbox" autoComplete="off" onChange={this.platformToggler.bind(this)}></input> All
			</label>
		);
	}

	buildSocialAccountTab(platform, account){
		var activeButton = this.state.platformToggles.find(x => x.platform === platform).toggle ? "active" : "";
		return(
			<label className={"btn btn-secondary "+activeButton}>
				<input id={platform} type="checkbox" autoComplete="off" onChange={this.platformToggler.bind(this)}></input> {platform} 
			</label>
		);
	}

	render() {
    	return (
    		<div className="btn-group btn-group-toggle">
				{this.buildSocialAccounts(null)}
			</div>
    	);
  	}	
}
