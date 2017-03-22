var React = require('react');

var Display = React.createClass({
    render:function(){
        var database = this.props.data;
        return(
          <div>
            {database.name}       {database.descripition}
          </div>
        );
    }
});
module.exports = Display;
