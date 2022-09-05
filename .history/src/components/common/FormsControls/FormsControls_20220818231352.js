import React from "react";
import style from "./FormsControls.module.css";

export const Textarea = (props) => {
   return (
      <div className={style.formControl + " " + style.error}>
         <textarea {...props}/>   
      </div>
   )
}