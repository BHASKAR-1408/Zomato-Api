const express = require('express');
const bodyparser = require('body-parser');
var client = require('./client')
const app = express();
const path = require('path')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

// permission for getting all the data from the specific folder

app.use(express.static('./views'));

app.set('views',path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use('/catagory',rootingpath = express.Router())
require('./catagories')(rootingpath,client);


app.use('/geocode',rootingpath = express.Router())
require('./geocode')(rootingpath,client);

app.listen(1100,(err)=>{
	if(err)throw err
	console.log("your port is working!");
})






























