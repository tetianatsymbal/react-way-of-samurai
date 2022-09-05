import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";

const LoginForm = (props) => {
  return (
   <form onSubmit={props.handleSubmit}>
      <div>
         <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
      </div>
      <div>
         <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type="password"/>
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
      props.login(formData.email, formData.password, formData.rememberMe);
   }
   return (
     <div>
       <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
     </div>
   );
 };
export default connect(null, {login })(Login);
