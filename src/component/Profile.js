//Start of Profile Class, With ES6 refactor
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
			allToggle: true,
			profileDisplay: false
		};

		this.platformToggler = this.platformToggler.bind(this)
		this.profileToggler = this.profileToggler.bind(this)
		this.constructProfile = this.constructProfile.bind(this)
		this.buildSocialAccounts = this.buildSocialAccounts.bind(this)
		this.buildAllAccountTab = this.buildAllAccountTab.bind(this)
		this.buildSocialAccountTab = this.buildSocialAccountTab.bind(this)
	}

	profileToggler(e){
		this.setState({profileDisplay: this.state.profileDisplay ? false : true});
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


			tempArray = this.state.platformToggles
			var count = 0;
			for (const key of Object.keys(tempArray)) {
				if(tempArray[key].toggle == false){
					count = count + 1;
					if(count == this.state.platformToggles.length){
						this.setState({allToggle: true});
					}
				}
			}
		}
		else{
			if(this.state.allToggle != true){
				var tempArray = this.state.platformToggles;
				for (const key of Object.keys(tempArray)) {
					tempArray[key].toggle = false;
				}
				this.setState({allToggle: this.state.allToggle ? false : true, platformToggles: tempArray});
			}
		}

	}

	constructProfile(){
		return(
			<div className="row profile">
				<div className="col-sm-4 text-center align-middle">
					<img src="../../resources/profile.png" className="rounded" alt="..."></img>
				</div>
				<div className="col-sm-8 align-middle">
					<h2>Profile Name</h2>
					<hr></hr>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</div>
			</div>
		);
	}

	buildSocialAccounts(social){

		//Test
		var social = [
		    {platform : "Reddit", account: "Sample"},
		    {platform : "Twitter", account: "Sample"},
		    {platform : "Instagram", account: "Sample"},
		    {platform : "Youtube", account: "Sample"},
		    {platform : "Facebook", account: "Sample"}
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
		var activeButton = this.state.allToggle === true ? " active" : "";
		return(
			<label className={"btn btn-secondary toggle-button"+activeButton} key={"all-tab"}>
				<input id="All" type="checkbox" autoComplete="off" onChange={this.platformToggler.bind(this)} key={"all-input-tab"}></input> All
			</label>
		);
	}

	buildSocialAccountTab(platform, account){
		var activeButton = this.state.platformToggles.find(x => x.platform === platform).toggle ? " active" : "";
		return(
			<label className={"btn btn-secondary toggle-button"+activeButton} key={platform+"-"+account+"-tab"}>
				<input id={platform} type="checkbox" autoComplete="off" onChange={this.platformToggler.bind(this)} key={platform+"-"+account+"-button"}></input> {platform} 
			</label>
		);
	}

	render() {
    	return (
    		<div>
	    		<div hidden={!this.state.profileDisplay}>
		    		{this.constructProfile()}
		    		<div className="btn-group btn-group-toggle toggle-bar">
						{this.buildSocialAccounts(null)}
					</div>
				</div>
				<div className="collapse-profile">
					<p className="text-center p-clean" onClick={this.profileToggler.bind(this)}></p>
				</div>
			</div>
    	);
  	}	
}
