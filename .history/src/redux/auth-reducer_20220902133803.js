import { stopSubmit } from "redux-form";
import { authAPI } from "../../src/api/api"

const SET_USER_DATA = "ADD-SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
  // isFetching: false,
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:{
      return {
        ...state,
        ...action.payload
      }
    }



    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getAuthThunk = () => async (dispatch) => 
{
  debugger;
  let response = await authAPI.getAuth();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};


export const login = (email, password, rememberMe) => async (dispatch) =>{
  let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuthThunk());
    } 
    else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
    }
};

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
};



export default authReducer;
