import React from "react";
import s from "./Message.module.css";

const Message = (props) => {

  return (
    <div>
      <div className={s.message}>{props.text}</div>
    </div>
  );
};

export default Message;
