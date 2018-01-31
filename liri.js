//```js node-spotify-api
require("dotenv").config();

var Twitter = require('twitter');

var request = require('request');

//```
var Spotify =require("node-spotify-api");
var keys = require("./keys.js");
var keyTwitter= keys.twitter
var keySpotify= keys.spotify
var omdb=keys.omdb
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var getMytweets=function(){
	
	var client = new Twitter(keys.twitter);
	var params = {screen_name: 'MikMary5'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    
    for (i = 0; i < tweets.length; i++) { 
    	tweets[i];
    	console.log(tweets[i].created_at);
    	console.log(tweets[i].text);
	}
  }
});

}
///*var Spotify = require('node-spotify-api');
 
//var spotify = new Spotify({
  //id:process.env.SPOTIFY_ID ,
  //secret:process.env.SPOTIFY_SECRET
//});*/
//TEST ONE 
/*var getMeSpotify=function(songName){
	spotify
	  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
	  .then(function(data) {
	    console.log(data); 
	  })
	  .catch(function(err) {
	    console.error('Error occurred: ' + err); 
	  });
}*/
var spotifyThisSong= function(nameOfSong){
	var Spotify = require('node-spotify-api');
 
	var spotify = new Spotify({
	  id: process.env.SPOTIFY_ID,
	  secret:process.env.SPOTIFY_SECRET
	});
	 
	spotify
	  .search({ type: 'track', query: nameOfSong })
	  .then(function(response) {
	    console.log(response);
	  })
	  .catch(function(err) {
	    console.log(err);
  });
}
var getMovie=function(movieName){
	var url='http://www.omdbapi.com/?t='+movieName+'&apikey='+ omdb.apiKey+'&'
	request(url, function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.
	});
}

var choose= function(){
	var picked=process.argv[2];
	switch(picked) {
    case 'my-tweets':
        getMytweets();
        break;
    case 'spotify-this-song':
        spotifyThisSong(process.argv[3]);
        break;
    case "get-movie":
    	getMovie(process.argv[3])
    	break;
	default:
        console.log("Command Not Found");
	};
};
	
choose();
//TEST TWO 
/*var spotify = require('spotify');
 
	spotify.search({ type: 'track', query: 'dancing in the moonlight'}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
       	return;
    }
 
    console.log(data); 
});*/
	


	
/*var pick =function(caseData,functionData){
	switch(caseData){
		case 'mytweets':
			getMytweets();
			break;
		case 'spotify-this-song':
			getMeSpotify(functionData);
			break;
		default:
		console.log('Liri does not know that');
	}
		
}
	
		
var runThis=function(argOne,argTwo){
	pick(argOne,argTwo);
};
runThis(process.argv[2],process.argv[3]);*/