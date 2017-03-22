var React = require('react');
var {browserHistory,hashHistory} = require('react-router');
var Login = require('Login');
var Link=require('react-router').Link;

var Signup = React.createClass({

   signUpFunction : function(e){
        e.preventDefault();
               var username = this.refs.userName.value;
               var password= this.refs.pass.value;
               var cpassword=this.refs.confirmPass.value;
               if (password===cpassword)
               {
               var signupForm = {
                   'username':this.refs.userName.value,
                   'password':this.refs.pass.value,
                                }


               console.log(signupForm);
               $.ajax({
                   url:'http://localhost:8080/users/AddUser',
                   type: 'POST',
                   data: signupForm,
                   success: function(data)
                   {
                       console.log(data);
                       hashHistory.push('/');
                   }.bind(this),
                   error: function(err)
                   {
                       console.log(err);
                   }.bind(this)
                   });


                 this.refs.userName.value='';
                 this.refs.pass.value='';
                 this.refs.confirmPass.value='';


               }
               else
               {
                       alert("password and confirm password have to be same !!");

               }

},

render:function(){
  return (
    <form autoComplete='on' onSubmit={this.signUpFunction}>
      <div className="container">
          <h1 className="form-signin-heading">Please SIGN UP</h1>
          <div className="input-group input-group-lg">
              <span className="input-group-addon">User Name</span>
              <input type="text" ref='userName' className="form-control" required></input>
          </div>
          <br></br>
          <div className="input-group input-group-lg">
              <span className="input-group-addon">  Password  </span>
              <input type="password" ref='pass' className="form-control" required></input>
          </div>
          <br></br>
          <div className="input-group input-group-lg">
              <span className="input-group-addon">Confirm Password</span>
              <input type="password" ref='confirmPass' className="form-control" ></input>
          </div>

          <br></br>
          <button className="btn btn-lg btn-primary btn-block">SIGN UP</button>
          <br></br>
          <br></br>
          <Link to="/Login"><button className="btn btn-lg btn-primary btn-block">SIGN IN</button></Link>
          <br></br>
      </div>
      </form>
)}
});
module.exports=Signup;
