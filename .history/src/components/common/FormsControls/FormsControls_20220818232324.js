import React from "react";
import style from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={style.formControl + " " + (hasError? style.error : "")}>
         <div>
            <textarea {...props}/>  
         </div>
         { hasError && <span>{"Some error"}</span> }
      </div>
   )
}