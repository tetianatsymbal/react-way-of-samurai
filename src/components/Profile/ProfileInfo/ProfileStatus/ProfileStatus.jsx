import React from "react";

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
   }

   activateAditMode = () => {
      console.log("this:", this);
      this.setState({
         editMode: true,
      })
   }
   deactivateAditMode=()=>{
      this.setState({
         editMode: false,
      })
   }

   render() {
      return (
         <div className="">
            {!this.state.editMode &&

               <div>
                  <span onDoubleClick={this.activateAditMode}>{this.props.status}</span>
               </div>}
            { this.state.editMode &&
               <div>
                  <input autoFocus={true} onBlur={this.deactivateAditMode} value={this.props.status} />
               </div>
            }
         </div>
      );
   }
}

export default ProfileStatus;
