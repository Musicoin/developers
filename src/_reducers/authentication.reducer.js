import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    // signup
    case userConstants.SIGNUP_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.SIGNUP_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.SIGNUP_FAILURE:
      return {};
    // forgot password
    case userConstants.FORGOT_PASSWORD_REQUEST:
      return {
        isSuccess: true,
        recipient: action.recipient,
        message: action.message
      };
    case userConstants.FORGOT_PASSWORD_SUCCESS:
      return {
        isSuccess: true,
        recipient: action.recipient,
        message: action.message
      };
    case userConstants.FORGOT_PASSWORD_FAILURE:
      return {};
    // reset password
    case userConstants.RESET_PASSWORD_REQUEST:
      return {
        recipient: action.recipient,
        message: action.message
      };
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {
        recipient: action.recipient,
        message: action.message
      };
    case userConstants.RESET_PASSWORD_FAILURE:
      return {};
    default:
      return state
  }
}