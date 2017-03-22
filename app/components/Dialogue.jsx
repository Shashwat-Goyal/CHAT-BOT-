var React=require('react');
var NavBar = require('NavBar');
var AutoComplete = require('material-ui').AutoComplete;
var TextField = require('material-ui').TextField;
var DialogueButtonComponent = require('DialogueButtonComponent');
var ConditionalResponse = require('ConditionalResponse');

var Dialogue = React.createClass({

		getInitialState: function () {
				return(
					{
					Node:'',
					searchText:'',
					inc:1,
					dialogueButtonComponent:[],
					fwdString: [],
					conditions: []
				}
				);
		},
		handleNode: function(e){
			this.setState({Node:e.target.value});
		},

		AddNode: function(e){
			e.preventDefault();
			console.log('AddNode');
			console.log(this.state.conditions[0].condition+"    "+this.state.conditions[1].condition);
			var DataString='';
			for(var i=0,j=0;i<this.state.fwdString.length;++i,++j){
				if(i===this.state.fwdString.length-1){
					DataString+=this.state.fwdString[i].value;
				}
				else{
				DataString+=this.state.fwdString[i].value+" "+this.state.conditions[j].condition+" ";

			}
		}
		console.log(DataString);

/*
		$.ajax({
		   url: 'http://localhost:8080/nodeadd/NodeAdd',
			 type:'POST',
			 data:jsonData,
			 cache: false,
			 success: function(data1) {
				 console.log(data1);
			 }.bind(this),
			 error: function(xhr, status, err) {
				 console.error(this.state.url, status, err.toString());
			 }.bind(this)
		 });
*/
		},

/*
createDataList: function(e){
		var input = e.target.value;
		var dataSource3 = [ input+'(create new condition)', '@'+input+'(create new Intent)', '#'+input+'(create new Entity)'];
		this.setState({dataSource:dataSource3});
},

handleUpdateInput:function(searchText){
		var conditionInput = this.refs.conditionInput.state.searchText;

		this.refs.conditionInput.state.value = '';

		if(conditionInput.indexOf('(create new condition')!=-1){
			this.refs.conditionInput.state.searchText = conditionInput.substring(0,conditionInput.indexOf('(create new condition'));
			this.state.fwdString.push(conditionInput.substring(0,conditionInput.indexOf('(create new condition')));
			this.setState({fwdString: this.state.fwdString});
		}

		else if(conditionInput.indexOf('(create new Intent')!=-1){
			this.refs.conditionInput.state.searchText=conditionInput.substring(0,conditionInput.indexOf('(create new Intent'));
			this.state.fwdString.push(conditionInput.substring(0,conditionInput.indexOf('(create new Intent')));
			this.setState({fwdString: this.state.fwdString});
		}
		else if(conditionInput.indexOf('(create new Entity')!=-1){
			this.refs.conditionInput.state.searchText=conditionInput.substring(0,conditionInput.indexOf('(create new Entity'));
			this.state.fwdString.push(conditionInput.substring(0,conditionInput.indexOf('(create new Entity')));
			this.setState({fwdString: this.state.fwdString});
		}

		this.setState({searchText: searchText});

},
*/
		//HANDLE MINUS BUTTON
handleUpdateInput: function(obj){
	var index = this.state.fwdString.findIndex(function(element){
		return element.id===obj.id;
	});
	if(index===-1){
		this.state.fwdString.push(obj);
		this.setState({fwdString: this.state.fwdString});
	}
	else{
		this.state.fwdString[index].value=obj.value;
		this.setState({fwdString: this.state.fwdString});
	}
	console.log(this.state.conditions);
},

handleMinusClick: function(tagID){
	var index = this.state.dialogueButtonComponent.findIndex(function(element){
		return element.props.id===tagID;
	});
	if(index!=-1){
		this.state.dialogueButtonComponent.splice(index, 1);
	}
	index = this.state.fwdString.findIndex(function(element){
		return element.id===tagID;
	});
	if(index!=-1){
		this.state.fwdString.splice(index, 1);
	}

	index = this.state.conditions.findIndex(function(element){
		return element.id===tagID;
	});
	if(index!=-1){
		this.state.conditions.splice(index, 1);
	}

	this.setState({dialogueButtonComponent: this.state.dialogueButtonComponent, fwdString: this.state.fwdString, conditions: this.state.conditions});
	let inc = this.state.inc;
	if(inc!==1){
	inc -=1;
	this.setState({inc:inc});
	}
},



	//HANDLE PLUS BUTTON

handlePlusClick: function(textValue){
	/*if(this.state.inc!=0)
	{
	this.state.fwdString.push(textValue);
	}

	this.setState({fwdString: this.state.fwdString});*/
	let inc = this.state.inc;
	inc += 1;
  this.setState({inc:inc})

},

saveConditions: function(condition, id){
		var conditionObj = {};
		conditionObj.id = id;
		conditionObj.condition = condition;
		var index = this.state.conditions.findIndex(function(element){
			return element.id===id;
		});
		if(index===-1){
		this.state.conditions.push(conditionObj);
	}
	else{
		this.state.conditions[index].condition = condition;
	}
},
			//RENDER FUNCTION

	render: function(){

	for(var i=this.state.dialogueButtonComponent.length+1;i<=this.state.inc;i++)
	{
		this.state.dialogueButtonComponent.push(<DialogueButtonComponent id={'a'+i} key = {i} onHandlePlusClick={this.handlePlusClick} onHandleMinusClick={this.handleMinusClick} onHandleUpdateInput={this.handleUpdateInput} onSaveConditions={this.saveConditions}></DialogueButtonComponent>);
	}
			return (
			<div>
				<NavBar/>
				<div id='myModal' className="modal fade" role="dialog">
				<div className="modal-dialog">

				<div className="modal-content col-md-12 text-center">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h3 className="modal-title">Create Node</h3>
					</div>

					<div className="modal-body">
						<h4 style={{textAlign:'left'}}>Name Of Node</h4>
						<div className="input-group">
			<span className="input-group-addon"><i className="glyphicon glyphicon-menu-right"></i></span>
			<input id="Node" type="text" value={this.state.name} onChange={this.handleNode} className="form-control" name="addindent" placeholder="Give Name to Your Workspace"/>
			</div>

			Trigger: <br />
			 if: {/*<AutoComplete
				 hintText="Type condition"
				 dataSource={this.state.dataSource}
				 ref="conditionInput"
				 onKeyUp={this.createDataList}
				 onUpdateInput={this.handleUpdateInput}
				 onNewRequest={this.handleNewRequest}
			 />*/}


		 {/*this.state.open ? <div><button role="button" className="btn btn-default" onClick={this.handlePlusClick}><span className="glyphicon glyphicon-plus"></span></button>&emsp;&emsp;<button className="btn btn-default" onClick={this.handleMinusClickthis}><span className="glyphicon glyphicon-minus"></span></button></div> : null*/}
			{this.state.dialogueButtonComponent}
						<div>
							<br/>
							<hr/>
							<br/>
							<ConditionalResponse/>
							<br/>
						<button type="Submit" className="btn btn-primary" onClick={this.AddNode}>Create</button>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>



		<div style={{marginTop:50,marginLeft:50}}>
			<button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#myModal">Create New Dialog</button>
		</div>

			</div>
			);
	}
});

module.exports = Dialogue;
