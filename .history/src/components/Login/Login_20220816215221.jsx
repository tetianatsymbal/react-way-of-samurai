import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
   <form action="">
      <div>
         <Field placeholder={"Login"} component={"input"} />
      </div>
      <div>
         <Field placeholder={"Password"} component={"input"}  />
      </div>
      <div>
         <Field component={"input"} type={"checkbox"} /> <span>Remember me</span>
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
