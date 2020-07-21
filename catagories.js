var path = require('path');


module.exports = (catagories,client)=>{

	// endpoint for getting data of category
	catagories

	.get('/',(req,res)=>{
			res.render('catagory')
		})

	.post('/',(req,res)=>{

		var id = req.body.id;
		console.log(id)

		client.getCategories(null, function(err, result){
			
		    if(!err){

		      var data = JSON.parse(result);

		      var CategoriesList = [];

		      data["categories"].forEach(function(item){

	      		CategoriesList.push(item.categories);

	      		CategoriesList.forEach(function(arg){
					
				if(arg.id == id){
					res.render('cR',{result:arg.name})
					// res.send(CategoriesList)
					
				}
			})     		
		})
	}else {

		    res.render("something error!");

		    }
		});		
	})
}
































