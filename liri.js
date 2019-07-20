//call stuff from .env file. anything that start with a dot is hidden
//research dotenv file 
require("dotenv").config(); 

//

const keys = require("./keys.js");
let command = process.argv[2];
/* 
if(command === "concert-this"){

}
elseif(command === "spotify-this-song"){
    
}
elseif(command === "movie-this"){
    
}
elseif(command === "do-what-it-says"){
    
} */




var Spotify = require('node-spotify-api');

 var spotify = new Spotify({
  id:keys.spotify.id ,
  secret: keys.spotify.secret
}); 
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    //navigate through object to Artist, song name (which i have), preview link of song from spotify, album of song
    console.log(response.tracks.items[0].album.artists[0].name); //artist name
    console.log(response.tracks.items[0].name); //song name
    console.log(response.tracks.items[0].album.name); //album name
    console.log(response.tracks.items[0].external_urls.spotify); //preview link
  })
  .catch(function(err) {
    console.log(err);
  });