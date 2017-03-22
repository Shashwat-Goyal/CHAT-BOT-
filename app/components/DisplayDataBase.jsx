var React = require('react');
var Display = require('Display');

var DisplayDataBase = React.createClass({
	getInitialState: function () {
			return{data:[]}
	},
    render:function(){

        var result = this.props.database.map(function(result,index){
            return <Display key={index} data={result} />
            });
        return(
            <div>
							Name:
							Descripition:
							{result}
						</div>
        );
    }
});
module.exports = DisplayDataBase;
