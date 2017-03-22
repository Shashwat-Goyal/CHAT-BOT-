var React=require('react');
var NavBar = require('NavBar');
var DisplayDataBase = require('DisplayDataBase');

var DashBoard = React.createClass({

	getInitialState:function(){
	 return {name:'',descripition:'',database:[]};
 },

	handleName: function (e) {
	this.setState({name:e.target.value});
},

	handleDescripition: function (e){
	this.setState({descripition:e.target.value});
},

//Using ComponentDidMount to populate the DashBoard as soon as the component is rendered.
	componentWillMount:function(){
		var url="http://localhost:8080/register/GetDatabase";
		$.ajax({
			url:url,
			type:'GET',
			dataType:'JSON',
			success:function(data){
				console.log(data);
				this.setState({database:data});

			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},

	//Adding the New Databse

	addWorkspace: function(){
		var jsonData = {
			name:this.state.name,
 			descripition:this.state.descripition
}

$.ajax({
	url: 'http://localhost:8080/register/add',
		 method:'POST',
		 //dataType: 'json',
		 data:jsonData,
		 cache: false,
		 success: function(data1) {
			 console.log(data1);
		 }.bind(this),
		 error: function(xhr, status, err) {
			 console.error(this.state.url, status, err.toString());
		 }.bind(this)
	 });
},

	render: function(){
		return (
			<div>
				<form onSubmit={this.addWorkspace}>
				<div>
					<NavBar/>

	      <div id='myModal' className="modal fade" role="dialog">
	    	<div className="modal-dialog">

	      <div className="modal-content col-md-12 text-center">
	        <div className="modal-header">
	          <button type="button" className="close" data-dismiss="modal">&times;</button>
	          <h3 className="modal-title">Create Workspace</h3>
	        </div>

	        <div className="modal-body">
						<h4 style={{textAlign:'left'}}>Workspace Name</h4>
	          <div className="input-group">
	    <span className="input-group-addon"><i className="glyphicon glyphicon-menu-right"></i></span>
	    <input id="name" type="text" value={this.state.name} onChange={this.handleName} className="form-control" name="addindent" placeholder="Give Name to Your Workspace"/>
	          </div>

						<br></br>

						<h4 style={{textAlign:'left'}}>Workspace Descripition</h4>
		          <div className="input-group">
		    <span className="input-group-addon"><i className="glyphicon glyphicon-menu-right"></i></span>
		    <input id="descripition" type="text" value={this.state.descripition} onChange={this.handleDescripition} className="form-control" name="addindent" placeholder="Please Describe your Workspace"/>
		          </div>

						<div>
							<br></br>

						<button type="Submit" className="btn btn-primary">Create</button>

						</div>
	        </div>
	        <div className="modal-footer">
	          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
	        </div>
	      </div>

	    </div>
	  </div>
				<div style={{marginTop:50,marginLeft:50}}>
	        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">Create New Workspace</button>
				</div>

	      </div>
				</form>
				<DisplayDataBase database={this.state.database} />
			</div>

			);
	}
});

module.exports = DashBoard;
