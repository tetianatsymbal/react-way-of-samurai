import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk } from '../../redux/profile-reducer';
import Profile from './Profile';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
 return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

  componentDidMount(){
    let  userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 25113;
      userId = 2;
    } 

    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
 
  }
  render () {
    return <Profile { ...this.props} status= {this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
}); 

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// export default connect(mapStateToProps, {getUserProfileThunk})(withRouter(AuthRedirectComponent));

export default  compose(
  connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk}),
  withRouter,
  // withAuthRedirect
)
(ProfileContainer);