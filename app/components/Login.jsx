var React = require('react');
var {hashHistory}= require ('react-router');
var {browserHistory} = require('react-router');
var Link=require('react-router').Link;
var DashBoard= require('DashBoard');

var Login= React.createClass({

getInitialState : function(){
  return ({login :"False"})
},

checkUser:function(e){
  e.preventDefault();
var userObj = {
  "username":this.refs.userName.value,
  "password":this.refs.passWord.value
              };
$.ajax({

  url:'http://localhost:8080/login',
  type: 'POST',
  data:userObj,
  dataType:"JSON",
  success: function(data)
  {

 console.log("Ajax login success");
 this.setState ({login: "True"})

  }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)

});
},

render : function () {
if(this.state.login == "False")
{
  return(
    <form onSubmit={this.checkUser}>
    <div className="container" style={{marginTop:20}}>
      <div className="jumbotron">
        <h2 style={{textAlign:'center', color:"#00000"}}> Welcome to Artificial Login </h2>
        <br></br>
        <img src="https://enterprise.github.com/assets/aws/jetpack-octocat-airlock-b4e1d022c0113c997328f6598d16e58ad049140e50da4859d6b4d174890bb1c8.jpg" className="img-responsive"></img>
      </div>

        <h3 className="form-signin-heading">Please Login To Artificial Intelegence World</h3>

        <div className="row">
        <div className="col-lg-9">
        <div className="input-group input-group-md">
            <span className="input-group-addon">Username</span>
            <input type="text" ref='userName' className="form-control" required></input>
        </div>
        <br></br>

        <div className="input-group input-group-md">

            <span className="input-group-addon">Password</span>

            <input type="password" ref='passWord' className="form-control" required></input>

        </div>

        <br></br>

        <button className="btn btn-md btn-primary btn-block">LOGIN</button>

        <br></br>
        </div>
        </div>
    </div>
</form>
  )
  }


else{
  return (
    <div>
    <DashBoard/>
    </div>
  )
}
}
  });
module.exports = Login;
