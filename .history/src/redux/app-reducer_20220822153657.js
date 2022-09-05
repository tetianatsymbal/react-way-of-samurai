import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api"

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:{
      return {
        ...state,
        initialized: true,
      }
    }



    default:
      return state;
  }
};

export const initializedSuccess = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getAuthThunk = () => {
  return (dispatch) => {
    authAPI.getAuth()
    .then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
  }
};


export const login = (email, password, rememberMe) => (dispatch)=>{
    authAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthThunk());
      } 
      else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
      }
    });
};

export const logout = () => (dispatch) => {
  authAPI.logout()
  .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
  });
  
};



export default appReducer;
