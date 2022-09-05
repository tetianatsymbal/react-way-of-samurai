import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./AddMessageForm.module.css";

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
 return(
   <form className={s.sendingBlock} onSubmit={props.handleSubmit}>
     <div>
       <Field component={Textarea} 
              className={s.textarea} 
              name="newMessageBody" 
              placeholder="Enter your message..."
              validate = {[required, maxLength100 ]} />
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