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

/*
let bandsAPIKey = process.env.bandsintown_SECRET;
let queryURL = "https://rest.bandsintown.com/artists/" + "Marshmellow" + "/events?app_id=" +bandsAPIKey
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
*/

  /*---------OMDB Movies---------- */
  /*
  let movieName ="batman"; //ex: process.argv[3] "batman" >>> node liri.js movie-this '<movie name here>'
  let OMDBapikey = process.env.OMDB_SECRET;
  let queryURL = "http://www.omdbapi.com/?t=" + movieName +"&y=&plot=short&apikey=" + OMDBapikey
  axios
  .get(queryURL)
  .then(
    function(response) {
      console.log("\nTitle of the Movie: "+response.data.Title);
      console.log("\nYear of the Movie: "+response.data.Year);
      console.log("\nIMDB rating of the Movie: "+response.data.imdbRating);
      console.log("\nRotten Tomatoes Rating of the Movie: "+response.data.Ratings[1]);
      console.log("\nCountry production of the Movie: "+response.data.Country);
      console.log("\nLanguage of the Movie: "+response.data.Language);
      console.log("\nPlot of the Movie: "+response.data.Plot);
      console.log("\nActors in the Movie: "+response.data.Actors);
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
  