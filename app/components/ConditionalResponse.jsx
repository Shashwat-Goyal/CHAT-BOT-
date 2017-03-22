var React=require('react');
var TextField = require('material-ui').TextField;
var DialogueButtonComponent = require('DialogueButtonComponent');
var ConditionalResponse = React.createClass({

  getInitialState: function () {
    return({
      text:'',
      element:[]
    });
  },

  handleUpdateInput: function(text){
    var conditionResponse = this.refs.conditionResponse.state.text;
    this.refs.conditionResponse.state.text = '';
    this.setState({text: text.target.value});
    console.log(this.state.text.value);
  },
  renderComponent: function(){

  },

	render: function(){


		return (
			<div>
        Response :
        <TextField
        hintText = "Resonse to The Condition"
        ref = "conditionResponse"
        onChange = {this.handleUpdateInput}
        onClick = {this.renderComponent}
         />
         <br/>
			</div>
			);
}
});

module.exports = ConditionalResponse;
