import { authAPI } from "../api/api"

const LOGIN = "LOGIN";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isLogin: false,
  // isFetching: false,
};


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:{
      return {
        ...state,
        ...action.data,
        isLogin: true,
      }
    }

    default:
      return state;
  }
};

export const loginUser = () => ({type: LOGIN, data});

export const getLoginThunk = () => {
  return (dispatch) => {
    authAPI.doLogin(data)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(loginUser(data));
        }
    });
  }
};



export default loginReducer;
