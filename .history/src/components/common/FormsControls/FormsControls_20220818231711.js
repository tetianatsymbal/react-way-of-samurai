import React from "react";
import style from "./FormsControls.module.css";

export const Textarea = (props) => {
   return (
      <div className={style.formControl + " " + style.error}>
         <div>
            <textarea {...props}/>  
         </div>
         <span>{"Some error"}</span> 
      </div>
   )
}