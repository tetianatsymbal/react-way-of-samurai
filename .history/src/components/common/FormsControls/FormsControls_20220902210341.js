import React from "react";
import style from "./FormsControls.module.css";

export const FormControl = ({input, meta: {touched, error, children}}) => {
   const hasError = touched && error;
   return (
      <div className={style.formControl + " " + (hasError? style.error : "")}>
         { hasError && <span>{error}</span> }
         <div>
            {children}
         </div>
      </div>
   )
}
export const Textarea = (props) => {
   const {input, meta, ...restProps} = props;
   return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
     
}
export const Input = (props) => {
   const {input, meta, ...restProps} = props;
   return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}