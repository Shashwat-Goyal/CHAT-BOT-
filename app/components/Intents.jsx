var React=require('react');
var NavBar = require('NavBar');
var Intents = React.createClass({


	render: function(){
		return (
      <div>
				<NavBar/>
      <div id='myModal' className="modal fade" role="dialog">
    	<div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h3 className="modal-title">Create Intent</h3>
        </div>
        <div className="modal-body">
          <div className="input-group">
    <span className="input-group-addon"><i className="glyphicon glyphicon-menu-right"></i></span>
    <input id="email" type="text" className="form-control" name="addindent" placeholder="Add Indent"/>
          </div>
					<div>

					<button type="button" style={{aling:'center'}} className="btn btn-primary">Add Intent</button>

					</div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
			<div style={{marginTop:50,marginLeft:50}}>
        <button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.IntentDilog}>Create New Intent</button>
			</div>
      </div>
			);
	}
});

module.exports = Intents;
