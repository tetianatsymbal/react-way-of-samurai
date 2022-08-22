
import { usersAPI } from "../../src/api/api"


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

// [
//   {
//     id: 1,
//     photoUrl:
//       "https://i.pinimg.com/originals/bf/73/8c/bf738c570e0d7ce3ad106dc15e70e06d.jpg",
//     followed: false,
//     fullName: "Tanuysha",
//     status: "Hi, I like theatre",
//     location: { city: "Kyiv", country: "UKRAINE" },
//   },
//   {
//     id: 2,
//     photoUrl:
//       "https://i.pinimg.com/564x/c7/4a/fe/c74afe7a1b5c13e4556749b17073fb25.jpg",
//     followed: true,
//     fullName: "Olezhyk",
//     status: "I'm boss",
//     location: { city: "Lviv", country: "UKRAINE" },
//   },
//   {
//     id: 3,
//     photoUrl:
//       "https://i.pinimg.com/originals/e2/c6/bf/e2c6bfb39721fddd6532592b93e06339.jpg",
//     followed: true,
//     fullName: "Frederic",
//     status: "Hi! How are you?",
//     location: { city: "New york", country: "USA" },
//   },
//   {
//     id: 4,
//     photoUrl:
//       "https://i.pinimg.com/564x/bc/9a/bb/bc9abb9b02de1313b2a5377b3fe408cc.jpg",
//     followed: false,
//     fullName: "Philip",
//     status: "Hi! How are you?",
//     location: { city: "Porto", country: "Portugal" },
//   },

// ]

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      };

    default:
      return state;
  }
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unFollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export const requestUsers=(currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.requestUsers(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
      }
    );
  }
};

export const follow = (userId) => {
  return (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.doFollowing(userId)
    .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
  }
};

export const unFollow = (userId) => {
  return (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.deleteFollowing(userId)
    .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
  }
};

// export const getAuth = () => {
//   return (dispatch) => {
//     usersAPI.getAuth()
//     .then(data => {
//       if (data.resultCode === 0) {
//         let {id, email, login} = data.data;
//         dispatch(setAuthUserData(id, email, login));
//       }
//     });
//   }
// };


export default usersReducer;
