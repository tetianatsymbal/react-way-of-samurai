import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
   <form onSubmit={props.handleSubmit}>
      <div>
         <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
      </div>
      <div>
         <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
      </div>
      <div>
         <Field name={"rememberMe"} type={"checkbox"} component={Input} /> <span>Remember me</span>
      </div>
      <div>
         <button>Login</button>
      </div>
   </form>

  );
};
const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm);
 
const Login = (props) => {
   const onSubmit = (formData) =>{
      console.log(formData);
   }
   return (
     <div>
       <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
     </div>
   );
 };
export default Login;
