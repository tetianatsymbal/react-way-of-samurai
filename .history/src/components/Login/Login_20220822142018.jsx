import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
  return (
   <form onSubmit={props.handleSubmit} className={style.loginForm}>
      <div>
         <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
      </div>
      <div>
         <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type="password"/>
      </div>
      <div lassName={style.rememberMe}>
         <Field c name={"rememberMe"} type={"checkbox"} component={Input}/> <label name= {"rememberMe"}>Remember me</label>
      </div>
      { props.error && <div className={style.formSummaryError}>{props.error}</div>}
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
   if (props.isAuth) {
      return <Navigate to= {"/profile"}></Navigate>
   }
   return (
     <div className={style.loginBlock}>
       <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
     </div>
   );
 };
 const mapStateToProps = (state) =>({
   isAuth: state.auth.isAuth
 })
export default connect(mapStateToProps, {login })(Login);
