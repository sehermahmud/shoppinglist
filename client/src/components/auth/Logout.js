import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropType from 'prop-types';

export class Logout extends Component {
    static propTypes = {
        logout: PropType.func.isRequired
    };

    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href="#">
                    Logout
                </NavLink>
            </Fragment>
        );
    }
}

export default connect(
    null, 
    { logout }
)(Logout);
