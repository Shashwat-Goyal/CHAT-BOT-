var express = require('express');
var router = express.Router();
var User = require('../models/users');
var nodeadd = require("../models/NodeAdd");


router.route('/NodeAdd').post(function(req,res,next){
  console.log(req.body);
  console.log(req.user.username);
  var reg = new NodeAdd(req.body);
  reg.save(function (err,data) {
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send("added node");
    }

});
});

router.route('/GetNode').get(function(req,res){
	var result=[];
  var cursor = db.collection('workspacedatas').find({},{__v:false, _id:false});
	cursor.forEach(function(data,err){
		if(err){
			console.log(err);
		}
		result.push(data);
		console.log(result);
	},
	function(){
		res.json(result);
	});
});

module.exports= router;
