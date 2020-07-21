var zomato = require('zomato');

// unique_key for this api:- 265e5a6e736f2032406a57837f64ee78

// creating the client connection:-

const Env = require('dotenv/config')

var client = zomato.createClient({
	userKey: process.env.key //as obtained from [Zomato API](https://developers.zomato.com/apis)
});

module.exports = client;
