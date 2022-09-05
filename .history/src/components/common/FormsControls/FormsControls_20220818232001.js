import React from "react";
import style from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
   return (
      <div className={style.formControl + " " + style.error}>
         <div>
            <textarea {...props}/>  
         </div>
         { meta.error && <span>{"Some error"}</span> }
      </div>
   )
}