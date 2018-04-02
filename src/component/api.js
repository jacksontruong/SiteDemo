//https://www.instagram.com/developer/

export function getInstagram(handle_data, num_photos) {
   var token = '1362124742.3ad74ca.6df307b8ac184c2d830f6bd7c2ac5644';
	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: token, count: num_photos},
		success: function(data){
			handle_data(generate_instagram_feed(data.data));
	 	},
		error: function(data){
			console.log(data);
		}
	});
}

function generate_instagram_feed(data){
	var instagram_raw_feed = [];

	for(var x in data){
	    instagram_raw_feed.push({
	    	title: data[x].user.full_name,
	    	description: data[x].caption.text, 
	    	link: data[x].link,
	    	image: data[x].images.standard_resolution.url, 
	    	time: data[x].created_time
	    });
	}
	return instagram_raw_feed;
}