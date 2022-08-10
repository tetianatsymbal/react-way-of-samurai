import React from "react";
import {Navigate} from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message text={m.message} key={m.id}/>
  ));

  // let newMessageElement = React.createRef();
  let sendMessage = () => {
    props.sendMessage();
  }
  
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  if (!props.isAuth) {
  return <Navigate to={"/login/"}></Navigate>
  } 

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.sendingBlock}>
        <div>
          <textarea className={s.textarea} onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
        </div>
        <div>
          <button className={s.sendMessageBtn} onClick={sendMessage}>
          ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
