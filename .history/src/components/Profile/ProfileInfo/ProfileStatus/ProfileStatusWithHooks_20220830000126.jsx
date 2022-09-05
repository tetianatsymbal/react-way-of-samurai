import React from "react";

const ProfileStatusWithHooks =(props) => {

   return (
       <div className="">
         { 
            <div>
               <span > {props.status || "no status"} dsd</span>
            </div>}
         { false &&
            <div>
               <input autoFocus={true} />
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;
