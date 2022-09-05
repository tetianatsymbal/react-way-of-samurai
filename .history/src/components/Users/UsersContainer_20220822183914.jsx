import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unFollow, toggleFollowingProgress, requestUsers } from "../../redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import Preloader from "../common/preloader/Preloader";
import Users from "./Users";
 
class UsersContainer extends React.Component {

  componentDidMount (){
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);

  }
  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);

  }
  render() { 
    return <> 
    {this.props.isFetching ? <Preloader /> : null}
    <Users totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
            onPageChanged = {this.onPageChanged}
            unFollow = {this.props.unFollow}
            follow = {this.props.follow}
            followingInProgress = {this.props.followingInProgress}>
            </Users>
  </>
 }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};


// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unFollow: (userID) => {
//       dispatch(unFollowAC(userID));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };
export default connect(mapStateToProps, 
  {follow, 
    unFollow, 
    setUsers, 
    setCurrentPage, 
    setTotalUsersCount, 
    toggleFollowingProgress,
    requestUsers
  }
)(UsersContainer);
