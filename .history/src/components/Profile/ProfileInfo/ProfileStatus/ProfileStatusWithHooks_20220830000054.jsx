import React from "react";

const ProfileStatusWithHooks =(props) => {

   return (
       <div className="">
         { 
            <div>
               <span > {props.status || "no status"} </span>
            </div>}
         { false &&
            <div>
               <input onChange= {} autoFocus={true} />
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;
