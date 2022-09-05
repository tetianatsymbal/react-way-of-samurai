import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
 return(
   <form className={s.sendingBlock} onSubmit={props.handleSubmit}>
     <div>
       <Field component="textarea" className={s.textarea} name="newMessageBody" placeholder="Enter your message..." />
     </div>
     <div>
       <button className={s.sendMessageBtn}>
       ↑
       </button>
     </div>
 </form>
 )
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);