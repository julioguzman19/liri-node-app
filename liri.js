require("dotenv").config(); 


const axios = require("axios");
const keys = require("./keys.js");
const moment = require("moment");
const fs=require("fs");

let command = process.argv[2];

switch(command){
  case "concert-this":
      bandsintownOutput();
    break;
  case "spotify-this-song":
    spotifyOutput();
    break;
  case "movie-this":
      omdbOutput();
    break;
  //Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
  //It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt
  //Edit the text in random.txt to test out the feature for movie-this and concert-this.
  case "do-what-it-says":
    spotifyOutput();
    break;
}

/*---------SPOTIFY---------- */
function spotifyOutput() {
  var Spotify = require('node-spotify-api');

  const spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
  

  let spotifySong = process.argv.slice(3).join(" ");  // process.argv[3] node liri.js concert-this <artist/band name here>
 
  if(process.argv[3] === undefined){
    spotifySong = "The Sign Ace of Base";
  }

  spotify
    .search({ type: 'track', query: spotifySong })
    .then(function (response) {
     
     console.log("\n Artist name: " + response.tracks.items[0].album.artists[0].name); //artist name
      console.log("\n Song name: " + response.tracks.items[0].name); //song name
      console.log("\n Album name: " + response.tracks.items[0].album.name); //album name
      console.log("\n Link Preview: " + response.tracks.items[0].external_urls.spotify); //preview link 
    })
    .catch(function (err) {
      console.log(err);
    });
}

/*---------Bandsintown---------- */
function bandsintownOutput() {
  let bandsAPIKey = process.env.bandsintown_SECRET;
  let bandSearch = process.argv.slice(3).join(" ");; //ex: process.argv[3] "Marshmellow" >>> node liri.js concert-this <artist/band name here>
  let queryURL = "https://rest.bandsintown.com/artists/" + bandSearch + "/events?app_id=" + bandsAPIKey
  //example: https://rest.bandsintown.com/artists/Marshmellow/events?app_id=
  axios.get(queryURL).then(
    function (response) {
      console.log(response.data[0].venue.name);
      console.log(response.data[0].venue.city);
      console.log(moment(response.data[0].datetime).format('MM/DD/YYYY')); //use moment to format "MM/DD/YYYY"
    },

    function (error) {
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
}

  /*---------OMDB Movies---------- */
function omdbOutput() {
  let movieName = process.argv[3]; //ex: process.argv[3] "batman" >>> node liri.js movie-this '<movie name here>'

  if(process.argv[3] === undefined){
     movieName = "Mr.Nobody";
  }

  let OMDBapikey = process.env.OMDB_SECRET;
  let queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + OMDBapikey
  axios
    .get(queryURL)
    .then(
      function (response) {
        console.log("\nTitle of the Movie: " + response.data.Title);
        console.log("\nYear of the Movie: " + response.data.Year);
        console.log("\nIMDB rating of the Movie: " + response.data.imdbRating);
        console.log("\nRotten Tomatoes Rating of the Movie: " + response.data.Ratings[1]);
        console.log("\nCountry production of the Movie: " + response.data.Country);
        console.log("\nLanguage of the Movie: " + response.data.Language);
        console.log("\nPlot of the Movie: " + response.data.Plot);
        console.log("\nActors in the Movie: " + response.data.Actors);
        console.log("\nIf you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/\nIt's on Netflix!");
      },

      function (error) {
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
}
  