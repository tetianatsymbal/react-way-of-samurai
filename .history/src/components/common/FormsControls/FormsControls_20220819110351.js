import React from "react";
import style from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={style.formControl + " " + (hasError? style.error : "")}>
         { hasError && <span>{meta.error}</span> }
         <div>
            <textarea {...input} {...props}/>  
         </div>
      </div>
   )
}
export const Input = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={style.formControl + " " + (hasError? style.error : "")}>
         { hasError && <span>{meta.error}</span> }
         <div>
            <input {...input} {...props}/>  
         </div>
      </div>
   )
}