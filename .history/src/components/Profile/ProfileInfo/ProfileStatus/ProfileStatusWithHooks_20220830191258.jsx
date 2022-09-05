import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks =(props) => {
   let [editMode, setEditMode ] = useState(false);
   let [status, setStatus ] = useState(props.status);

   useEffect( () => {setStatus(props.status)}, [props.status] );

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () =>{
      setEditMode(false);
      props.updateStatusThunk(status);
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
               <input onChange= {onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;
