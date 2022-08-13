import {profileAPI, usersAPI} from '../api/api';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likeCount: 12 },
    { id: 2, message: "Hello! It's my first post!", likeCount: 7 },
    { id: 3, message: "Hi! Have a good day!!!", likeCount: 23 },
    { id: 4, message: "Have a good day!!!", likeCount: 190 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_STATUS:{
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE:{
      return {
        ...state,
        profile: action.profile,
      };
    }


    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfileThunk = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data));
    });
  }
};

export const getStatusThunk = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then(response => {
    dispatch(setStatus(response.data))
  });
}
export const updateStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then(response => {
    if(response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  });
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
