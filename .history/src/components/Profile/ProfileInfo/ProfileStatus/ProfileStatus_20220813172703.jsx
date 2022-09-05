import React from "react";

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status,
      
   }

   activateAditMode = () => {
      this.setState({
         editMode: true,
      })
   }
   deactivateAditMode = () =>{
      this.setState({
         editMode: false,
      })
      this.props.updateStatusThunk(this.state.status);
   }
   onStatusChange = (e) => {
      this.setState(
         {status: e.currentTarget.value}
      );
   }
   componentDidUpdate(prevProps){
      debugger;
      console.log("componentDidUpdate");
      if (prevProps.status !== this.props.status){
        this.setState({
          status: this.props.status
        })
      }
    }
   render() {
      return (
         <div className="">
            {!this.state.editMode &&

               <div>
                  <span onDoubleClick={this.activateAditMode}>{this.props.status || "------"}</span>
               </div>}
            { this.state.editMode &&
               <div>
                  <input onChange= {this.onStatusChange} autoFocus={true} onBlur={this.deactivateAditMode} value={this.state.status} />
               </div>
            }
         </div>
      );
   }
}

export default ProfileStatus;
