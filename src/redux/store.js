import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! How are you?", likeCount: 12 },
        { id: 2, message: "Hello! It's my first post!", likeCount: 7 },
        { id: 3, message: "Hi! Have a good day!!!", likeCount: 23 },
        { id: 4, message: "Have a good day!!!", likeCount: 190 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
      ],
    },
    sidebar: {
      friends: [
        { id: 1, name: "Masha", 
        src:
        "https://i.pinimg.com/564x/69/f7/50/69f7503539aa89c9c116e9ae1b240b57.jpg" },
        { id: 2, name: "Kytsya", 
        src:
        "https://i.pinimg.com/564x/10/5e/af/105eaf02df542edc165dca355862c08b.jpg" },
        { id: 3, name: "Mura", 
        src:
        "https://i.pinimg.com/564x/a7/8c/b8/a78cb811d0a73b880364de2886ad41c6.jpg" },
      ]
    },
  },
  _callSubscriber() {
    console.log('State has been changed');
  },
  getState() {
    return this._state;
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}








// let renderEntireTree = () => {
//    console.log('State has been changed');
// }

// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: "Hi! How are you?", likeCount: 12 },
//       { id: 2, message: "Hello! It's my first post!", likeCount: 7 },
//       { id: 3, message: "Hi! Have a good day!!!", likeCount: 23 },
//       { id: 4, message: "Have a good day!!!", likeCount: 190 },
//     ],
//     newPostText: "",
//   },
//   dialogsPage: {
//     messages: [
//       { id: 1, message: "Do you like React?" },
//       { id: 2, message: "Everything will be ok!" },
//       { id: 3, message: "Hi here! It's new opportunity for you!" },
//       { id: 4, message: "Hi! It's for you!" },
//     ],
//     dialogs: [
//       { id: 1, name: "Tanya" },
//       { id: 2, name: "Olezhychka" },
//       { id: 3, name: "Kytsya" },
//       { id: 4, name: "Mura" },
//     ],
//     newMessageText: ["MY"],
//   },
//   sidebar: {
//     friends: [
//       { id: 1, name: "Masha" },
//       { id: 2, name: "Kytsya" },
//       { id: 3, name: "Mura" },
//     ],
//     avatars: [
//       {
//         id: 1,
//         src:
//           "https://i.pinimg.com/564x/69/f7/50/69f7503539aa89c9c116e9ae1b240b57.jpg",
//       },
//       {
//         id: 2,
//         src:
//           "https://i.pinimg.com/564x/10/5e/af/105eaf02df542edc165dca355862c08b.jpg",
//       },
//       {
//         id: 3,
//         src:
//           "https://i.pinimg.com/564x/a7/8c/b8/a78cb811d0a73b880364de2886ad41c6.jpg",
//       },
//     ],
//   },
// };
// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likeCount: 0,
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = "";
//   renderEntireTree(state);
// };
// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   renderEntireTree(state);
// };


// export const sendMessage = () => {
//   let newMessage = {
//     id: 4,
//     message: state.dialogsPage.newMessageText,
//   };
//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessageText= '';
//   renderEntireTree(state);
// };
// export const updateNewMessageText = (newMsgText) => {
//   state.dialogsPage.newMessageText = newMsgText;
//   renderEntireTree(state);
// };

// export const subscribe = (observer) => {
//    renderEntireTree = observer;
// }

export default store;
window.store = store;
