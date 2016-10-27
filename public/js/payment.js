$(function(){

  payment();
});

function payment(){
	$('#payment').on('click', function(event) {
		event.preventDefault();
		collect_funds();
	})
}
function collect_funds() {

	 		$.ajax(
				{type: "POST",
				 url: "http://localhost:8080/visadirect",
				 async: true,

				  success: function (data) {
				  	// alert( "Data Loaded: " + data );
						console.log('in success visadirect')
				  	window.location.href = "/payments/1";
				  },
				  error: function (data) {
				  	// alert( "Data Loaded: " + data );
						console.log('in error visadirect')
				  	window.location.href = "/payments/1";
				  }
			});
		}

// Funds a card and re-directs to success page
function fund_card() {

	$.ajax(
		{type: "POST",
		 url: "https://shared-sandbox-api.marqeta.com/v3/gpaorders",
		 contentType:"application/json; charset=utf-8",
		 dataType: 'json',
		 async: true,

		 beforeSend: function (xhr) {
		  	xhr.setRequestHeader ("Authorization",
		  		"Basic " + btoa("user2511477178831:f275a342-6db6-4d23-8a78-c2416538a400"));
		 },

		  // username: 'user2511477178831',
		  // password: 'f275a342-6db6-4d23-8a78-c2416538a400',

		  data: JSON.stringify(
		  	{"user_token": "188794de-da8e-4e42-8325-bc668da7426b",
					  			"amount": "10.00",
					  		  "currency_code": "840",
					  			"funding_source_token": "aa643dc1-dafd-41e1-803c-a92ab31037ba"}),

		  success: function (data) {
		  	// alert( "Data Loaded: " + data );
		  	window.location.href = "game-success.html";
		  },
		  error: function (data) {
		  	// alert( "Data Loaded: " + data );
		  	window.location.href = "game-success.html";
		  }
	});

}
