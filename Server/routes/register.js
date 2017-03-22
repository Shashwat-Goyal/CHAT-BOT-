var express = require('express');
var router = express.Router();
var register = require("../models/register");
var mongoose=require('mongoose');
var DBConnection=require('../Connection/DBConnection');
DBConnection();
mongoose.Promise = global.Promise;



/* Adding the data in the database */
router.route('/add').post(function(req,res,next){
  //console.log(req.body);
  var reg = new register(req.body);
  reg.save(function (err,data) {
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send("added");
    }

});
});

router.route('/GetDatabase').get(function(req,res){
	var result=[];
  var cursor = db.collection('workspacedatas').find({},{__v:false, _id:false});
	cursor.forEach(function(data,err){
		if(err){
			console.log(err);
		}
		result.push(data);
		//console.log(result);
	},
	function(){
		res.json(result);
	});
});

//Getting data from the database using collection (Important)
/*

*/

//Getting data from the database using the schema

// router.route('/GetMovies').get(isLoggedIn, function(req,res){
// 	addMovies.find({},function(err,docs){
// 		if(err){
// 			res.send(err);
// 		}
// 		else{
// 			res.json(docs);
// 		}
// 	});
// });
//
//
// //Updating the given movie
// router.route('/UpdateMovie').put(isLoggedIn,function(req,res){
// 	if(req.body){
// 		console.log(req.body);
// 		db.collection('addmovies').update({'imdbID':req.body.imdbID},{$set : {'Rating' : req.body.Rating, 'Description' : req.body.Description}})
// 		res.send("Updated");
// 	}
// 	else{
// 		console.log("Nothing in body");
// 		res.send("Please give a movie object");
// 	}
// });
//
// //Deleting a given movie
// router.route('/DeleteMovie').delete(isLoggedIn, function(req,res){
// 	if(req.body){
// 		console.log(req.body);
// 		db.collection('addmovies').remove({'imdbID':req.body.imdbID});
// 		res.send("Deleted the given movie");
// 	}
// 	else{
// 		console.log("Nothing in body");
// 		res.send("Please enter a movie object");
// 	}
// });


function isLoggedIn(req,res,next){
 console.log(req);
 if(req.isAuthenticated()){
 	console.log("Inside isLoggedIn");
   return next();
 }
 else{
 	console.log("Inside isLoggedIn Notlogin");
   res.json('not authenticated');
 }
 }
//
//  });

module.exports = router;
