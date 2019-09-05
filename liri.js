require("dotenv").config();
var keys = require("./keys.js");

var spotify = keys.spotify;


var axios = require("axios");



if (process.argv[2] === "concert-this") {
    var bandvar = process.argv[3]
    var queryUrl = "https://rest.bandsintown.com/artists/" + bandvar + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            if (error.response) {

                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {

                console.log("Error", error.message);
            }
            console.log(error.config);
        });
} else if (process.argv[2] === "spotify-this-song") {
    var spotify = require('node-spotify-api');
    var songname = process.argv[3]

    spotify.search({ type: 'track', query: songname }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

        console.log(data);
    });
} else if (process.argv[2] === "movie-this") {
    var input = process.argv[3];
    var queryUrl = "https://www.omdbapi.com/?t=" + input + "&apikey=trilogy";

    request(queryUrl, function (body) {
        var movies = JSON.parse(body);
        console.log(movies)
    });
};




