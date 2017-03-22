var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var DilogNode = new Schema({
	Node:String
});

NodeAdd = mongoose.model('DilogNode', DilogNode );

module.exports = NodeAdd;/*mongoose.model('AddData', AddRegisterSchema );*/
