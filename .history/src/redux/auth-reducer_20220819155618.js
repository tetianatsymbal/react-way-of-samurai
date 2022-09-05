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


export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthThunk());
        }
    });
  }
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
    .then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false));
        }
    });
  }
};



export default authReducer;
