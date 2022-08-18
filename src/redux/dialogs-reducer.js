const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Do you like React?" },
    { id: 2, message: "Everything will be ok!" },
    { id: 3, message: "Hi here! It's new opportunity for you!" },
    { id: 4, message: "Hi! It's for you!" },
  ],
  dialogs: [
    { id: 1, name: "Tanya" },
    { id: 2, name: "Olezhychka" },
    { id: 3, name: "Kytsya" },
    { id: 4, name: "Mura" },
  ]
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: action.newMessageBody}]
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
