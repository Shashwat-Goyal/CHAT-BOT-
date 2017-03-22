var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var Workspace = new Schema({
	name:String,
	descripition:String
});

addWorkspace = mongoose.model('WorkspaceData', Workspace );

module.exports = addWorkspace;/*mongoose.model('AddData', AddRegisterSchema );*/
