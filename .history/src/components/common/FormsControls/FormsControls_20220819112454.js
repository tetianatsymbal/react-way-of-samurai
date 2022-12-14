import React from "react";
import style from "./FormsControls.module.css";

export const FormControl = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={style.formControl + " " + (hasError? style.error : "")}>
         { hasError && <span>{meta.error}</span> }
         <div>
            {props.children}
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