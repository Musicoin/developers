import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getAll,
    signup,
    forgotPassword,
    resetPassword
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/profile');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function signup(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.signup(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/profile');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
    function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user } }
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
}

function forgotPassword(username) {
    return dispatch => {
        dispatch(request({ username }));

        userService.forgotPassword(username)
            .then(
                message => { 
                    dispatch(success(message));
                    // history.push('/login');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(message) { return { type: userConstants.FORGOT_PASSWORD_REQUEST, message } }
    function success(message) { return { type: userConstants.FORGOT_PASSWORD_SUCCESS, message } }
    function failure(error) { return { type: userConstants.FORGOT_PASSWORD_FAILURE, error } }
}

function resetPassword(code, password) {
    return dispatch => {
        dispatch(request({ code, password }));

        userService.resetPassword(code, password)
            .then(
                message => { 
                    dispatch(success(message));
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(message) { return { type: userConstants.RESET_PASSWORD_REQUEST, message } }
    function success(message) { return { type: userConstants.RESET_PASSWORD_SUCCESS, message } }
    function failure(error) { return { type: userConstants.RESET_PASSWORD_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}