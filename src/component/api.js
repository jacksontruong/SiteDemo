//https://www.instagram.com/developer/

export function getInstagram(handle_data, num_photos) {
   var token = '1362124742.3ad74ca.6df307b8ac184c2d830f6bd7c2ac5644';
	$.ajax({
		url: 'https://api.instagram.com/v1/users/self/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: token, count: num_photos},
		success: function(data){
			handle_data(data.data);
	 	},
		error: function(data){
			console.log(data);
		}
	});
}