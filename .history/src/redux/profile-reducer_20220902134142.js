import {profileAPI, usersAPI} from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you?", likeCount: 12 },
    { id: 2, message: "Hello! It's my first post!", likeCount: 7 },
    { id: 3, message: "Hi! Have a good day!!!", likeCount: 23 },
    { id: 4, message: "Have a good day!!!", likeCount: 190 },
  ],
  profile: null,
  status: "",
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
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
    case DELETE_POST:{
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId),
      };
    }


    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfileThunk = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
}

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

export default profileReducer;
