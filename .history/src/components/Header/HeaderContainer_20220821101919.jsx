import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthThunk, logout } from '../../redux/auth-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class HeaderContainer extends React.Component {

    componentDidMount(){
        this.props.getAuthThunk();

    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

// export default connect(mapStateToProps, {getAuthThunk, logout})(HeaderContainer);
export default compose(
    connect(mapStateToProps, {getAuthThunk, logout}),
    withAuthRedirect
)
(HeaderContainer)