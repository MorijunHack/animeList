import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

import NotificationSnackbar from '../components/NotificationSnackbar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';


const styles = theme => ({
    root: {
        margin: 10
    }
});

class Notification extends Component {

    render(){
        const { NotificationReducer, actions } = this.props;

        const { classes } = this.props;

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                open={NotificationReducer.isOpen}
                autoHideDuration={3000}
                onClose={actions.closeNotification}
                className={classes.root}
            >
                <NotificationSnackbar
                    onClose={actions.closeNotification}
                    variant={NotificationReducer.variant}
                    message={NotificationReducer.message}
                />
            </Snackbar>
        );
    }
}

Notification.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

const mapState = (state, ownProps) => ({
    NotificationReducer: state.NotificationReducer
});
function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapState, mapDispatch)(
    withStyles(styles, {withTheme: true})(Notification)
);