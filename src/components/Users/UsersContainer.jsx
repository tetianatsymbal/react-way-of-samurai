import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unFollow, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import Users from "./Users";
 
class UsersContainer extends React.Component {

  componentDidMount (){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);

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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
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
    getUsers
  }
)(UsersContainer);
