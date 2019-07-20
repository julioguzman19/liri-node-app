//call stuff from .env file. anything that start with a dot is hidden
//research dotenv file 
require("dotenv").config(); 

//

// TODO Grab the axios package...
// @link https://www.npmjs.com/package/axios
var axios = require("axios");


const keys = require("./keys.js");
let command = process.argv[2];


/* 
process.env
if(command === "concert-this"){

}
elseif(command === "spotify-this-song"){
    
}
elseif(command === "movie-this"){
    
}
elseif(command === "do-what-it-says"){
    
} */


/*---------SPOTIFY---------- */
var Spotify = require('node-spotify-api');

 var spotify = new Spotify({
  id:keys.spotify.id ,
  secret: keys.spotify.secret
}); 
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    //navigate through object to Artist, song name (which i have), preview link of song from spotify, album of song
    /*
    console.log(response.tracks.items[0].album.artists[0].name); //artist name
    console.log(response.tracks.items[0].name); //song name
    console.log(response.tracks.items[0].album.name); //album name
    console.log(response.tracks.items[0].external_urls.spotify); //preview link
    */
  })
  .catch(function(err) {
    console.log(err);
  });

  /*---------Bandsintown---------- */
/*
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")
*/

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)

 let queryURL = "https://rest.bandsintown.com/artists/" + "Marshmellow" + "/events?app_id="
//example: https://rest.bandsintown.com/artists/Marshmellow/events?app_id=
axios.get(queryURL).then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data[0].venue.city); //failing
  },

  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
); 


  /*---------OMDB Movies---------- */
  /*
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
  */
  /*
  let movieName = "batman"; //will use prcess.argv [3] >>> node liri.js movie-this '<movie name here>'
  let apikey = ""
  let queryURL = "http://www.omdbapi.com/?t=" + movieName +"&y=&plot=short&apikey=" + apikey
  axios
  .get(queryURL)
  .then(
    function(response) {
      // If the axios was successful... 
      // Then log the body from the site!
      console.log(response.data); 
    },
  
    function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  );
  */