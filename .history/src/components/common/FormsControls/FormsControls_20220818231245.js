import React from "react";
import s from "./FormsControls.module.css";

export const Textarea = (props) => {
   return (
      <div className={s.formControl}>
         <textarea {...props}/>   
      </div>
   )
}