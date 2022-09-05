import React from "react";
import { useState } from "react";

const ProfileStatusWithHooks =(props) => {
   let [editMode, setEditMode ] = useState(false);
   let [status, setStatus ] = useState(props.status);
   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateAditMode = () =>{
      setEditMode(false);
      // props.updateStatus(state.status);
   }
   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }
   return (
       <div className="">
         { !editMode &&
            <div>
               <span onDoubleClick={activateEditMode}> {props.status || "no status"} </span>
            </div>}
         { editMode &&
            <div>
               <input onChange= {onStatusChange} autoFocus={true} onBlur={deactivateAditMode}/>
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;
