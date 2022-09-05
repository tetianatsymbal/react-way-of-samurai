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

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunk = () => (dispatch) => {
  dispatch(getAuthThunk());
};




export default appReducer;
