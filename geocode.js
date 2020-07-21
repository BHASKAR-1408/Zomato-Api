var path = require('path');


module.exports = (geocode,client)=>{

	// router for geocode
geocode
	.get('/',(req,res)=>{
		res.render('geocode')
	})

	.post('/',(req,res)=>{
		var langitude = req.body.langitude;
		var latitude = req.body.latitude;

		client.getGeocode({
		lat:latitude, //latitude
		lon:langitude//longitude
		}, function(err, result){
		    if(!err){
			    var nearby_restaurants_data = JSON.parse(result).nearby_restaurants;
			    var list = [];
			    nearby_restaurants_data.forEach(function(item){
			    	var dic = {};
			    	for(i in item){
			    		if(typeof item.i === "object"){
			    			if(i === "location"){
			    				for(j in i){
			    				dic["address"] = i.address;
			    				dic["locality"] = i.locality;
			    				dic["address"] = i.city;
			    				}
			    			}else{
			    				break
			    			}
			    		}else{
			    			dic["id"] = i.id
			    			dic["name"] = i.name
			    			dic["url"] = i.url
			    		}
			    	}
			    	list.push(dic)
			    })
			    // res.render('gR',{list:dta})
			    res.send(list)
		    }else {

		     res.send(err);

		    }
		});
	})
}


































