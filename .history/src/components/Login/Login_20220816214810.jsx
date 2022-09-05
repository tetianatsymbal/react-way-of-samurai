import React from "react";
import { reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
   <form action="">
      <div>
         <input placeholder={"Login"} type="text" />
      </div>
      <div>
         <input placeholder={"Password"} type="text" />
      </div>
      <div>
         <input type={"checkbox"} /> <span>Remember me</span>
      </div>
      <div>
         <button>Login</button>
      </div>
   </form>

  );
};
const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm);
 
const Login = (props) => {
   return (
     <div>
       <h1>Login</h1>
      <LoginReduxForm />
     </div>
   );
 };
export default Login;
