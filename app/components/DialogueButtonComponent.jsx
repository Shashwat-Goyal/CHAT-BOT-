var React = require('react');
var AutoComplete = require('material-ui').AutoComplete;

var DialogueButtonComponent = React.createClass({

  getInitialState: function(){
      return({
        open: false,
        dataSource: [],
        searchText:''
      });
  },

  handlePlusClick: function(){
      var prop = this.props.id;
      this.setState({open: true});
      this.props.onHandlePlusClick(this.refs[prop].state.searchText);
  },

handleMinusClick: function(){
  var prop = this.props.id;
  this.props.onHandleMinusClick(prop);
  this.setState({open: false});
},
createDataList: function(e){
    var input = e.target.value;
    var dataSource3 = [ input+'(create new condition)', '@'+input+'(create new Intent)', '#'+input+'(create new Entity)'];
    this.setState({dataSource:dataSource3});
},

handleUpdateInput:function(searchText){
  var prop = this.props.id;
  var conditionInput = this.refs[prop].state.searchText;
  this.refs[prop].value = '';
  var obj={};
  obj.id=prop;
  if(conditionInput.indexOf('(create new condition')!=-1){
    this.refs[prop].state.searchText = conditionInput.substring(0,conditionInput.indexOf('(create new condition'));
    obj.value = this.refs[prop].state.searchText;
    this.props.onHandleUpdateInput(obj);
    this.setState({open: true});
  }

  else if(conditionInput.indexOf('(create new Intent')!=-1){
    this.refs[prop].state.searchText = conditionInput.substring(0,conditionInput.indexOf('(create new Intent'));
    obj.value = this.refs[prop].state.searchText;
    this.setState({open: true});
  }
  else if(conditionInput.indexOf('(create new Entity')!=-1){
    this.refs[prop].state.searchText = conditionInput.substring(0,conditionInput.indexOf('(create new Entity'));
    obj.value = this.refs[prop].state.searchText;
    this.setState({open: true});
  }
  this.setState({searchText: searchText});
},

saveConditions: function(event){
    var prop=this.props.id;
    this.props.onSaveConditions(event.target.value, this.props.id);
},

  render: function(){
    return(
      <div>
  <div>
    <AutoComplete
     ref={this.props.id}
     hintText="Type condition"
     dataSource={this.state.dataSource}
     onKeyUp={this.createDataList}
     onUpdateInput={this.handleUpdateInput}
   ></AutoComplete>
  </div>

  {this.state.open ?
    <div>
    <select onChange={this.saveConditions}>
      <option value='Select'>Select</option>
      <option value='AND'>AND</option>
      <option value="OR">OR</option>
    </select>
    <br/>
    <br/>
    <button className="btn btn-default" onClick={this.handlePlusClick}>
    <span className="glyphicon glyphicon-plus"></span>
  </button>

  &emsp;&emsp;

  <button className="btn btn-default" onClick={this.handleMinusClick}>
    <span className="glyphicon glyphicon-minus"></span>
  </button></div> : null}

    </div>

);
  }
});

module.exports = DialogueButtonComponent;
