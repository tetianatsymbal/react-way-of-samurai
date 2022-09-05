const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 1, message: "Do you like React?" },
    { id: 2, message: "Everything will be ok!" },
    { id: 3, message: "Hi here! It's new opportunity for you!" },
    { id: 4, message: "Hi! It's for you!" },
  ],
  newMessageText: "",
  dialogs: [
    { id: 1, name: "Tanya" },
    { id: 2, name: "Olezhychka" },
    { id: 3, name: "Kytsya" },
    { id: 4, name: "Mura" },
  ]
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMsgText,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, {id: 6, message: state.newMessageText}]
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMsgText: text});

export default dialogsReducer;
