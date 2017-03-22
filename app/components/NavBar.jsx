import React from 'react';
var Link=require('react-router').Link;
var IndexLink=require('react-router').IndexLink;
var AppBar = require('material-ui').AppBar;

var NavBar = React.createClass({
  render: function () {
    return(
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Wipro Jarvis</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/DashBoard">DashBoard</Link></li>
            <li><Link to="/Intents">Intents</Link></li>
            <li><Link to="/Entities">Entities</Link></li>
            <li><Link to="/Dialogue">Dialogue</Link></li>
          </ul>
        </div>
      </nav>

  

    </div>
    )
  }
});
module.exports = NavBar;
