import React from 'react';
var Link=require('react-router').Link;
var IndexLink=require('react-router').IndexLink;


var NavLogin = React.createClass({
  render: function () {
    return(
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Wipro Jarvis</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active" ><Link to="/Login">Login</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    )
  }
});
module.exports = NavLogin;
