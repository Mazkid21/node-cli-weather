//Bonus: take in state and city as arguments instead of hardcoding
var city = "Denver";
var state = "CO";

//Require apiKey
var apiKey = require('./env');

//Require the request library
//What is the `request` library you ask?
//Google `npm request` and you can find out!
var request = require('request');

// Set the API URL we are hitting, with our API Key and zipcode
var url = 'http://api.wunderground.com/api/';
var apiUrl = url + apiKey + '/conditions/q/' + state + '/' + city + '.json';

//The actual request sending

request(apiUrl, function (error, response, body) {
  //Inside that callback

  //Print out the weather result
  console.log('TEH WETHER IN DENVER IS ' + JSON.parse(body).current_observation.weather);
});
