var request = require('request');
var url = "https://dobest.io/";

request(url, function(error, response, body){
    if(error) throw error;
    console.log(body);
});