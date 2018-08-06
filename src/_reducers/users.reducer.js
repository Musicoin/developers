import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.message
      };
    default:
      return state
  }
}
