//Start of Side Nav Class, With ES6 refactor
export default class SideNav extends React.Component {
  render() {
    return (
		<div>
			<ul className="list-group">
				<li className="list-group-item d-flex justify-content-between align-items-left">
					All
				</li>
				{buildSocialAccounts(null)}
			</ul>
		</div>
    )
  }
}

function buildSocialAccounts(social){

	//Test
	var social = [
	    {platform : "Reddit", account: "sameple"},
	    {platform : "Twitter", account: "sameple"},
	    {platform : "Instagram", account: "sameple"}
	];
	//Test

	var SocialAccounts = [];
	for (const key of Object.keys(social)) {
		SocialAccounts.push(buildSocialAccountTab(key, social[key]));
	}
	console.log(SocialAccounts);

	return SocialAccounts;
}

function buildSocialAccountTab(platform, account){
	return [(
		<li className="list-group-item d-flex justify-content-between align-items-left">
			<span> {platform}: {account} </span>
		</li>
	)];
}
