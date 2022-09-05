import React from "react";
import { useState } from "react";

const ProfileStatusWithHooks =(props) => {
   let [editMode, setEditMode ] = useState(false);
   const activateEditMode = () => {
      setEditMode(true);
   }

   return (
       <div className="">
         { !editMode &&
            <div>
               <span onDoubleClick={activateEditMode}> {props.status || "no status"} </span>
            </div>}
         { editMode &&
            <div>
               <input autoFocus={true} />
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;
