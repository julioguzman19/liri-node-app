/* require("dotenv").config(); */

let keys = require("./keys.js");
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

// Basic Node application for requesting data from the Spotify website via axios
// Here we incorporate the "axios" npm package


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: ,
  secret: 
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });