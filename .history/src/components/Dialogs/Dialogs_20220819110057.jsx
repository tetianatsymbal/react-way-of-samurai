import React from "react";
import {Navigate} from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message text={m.message} key={m.id}/>
  ));

  // let newMessageElement = React.createRef();
 
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) {
  return <Navigate to={"/login/"}></Navigate>
  } 

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};


export default Dialogs;
