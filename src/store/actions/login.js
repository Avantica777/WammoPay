import { LOGIN_STATUS } from '../actionTypes';

export function loginStatus(value) {
    return dispatch => {
        dispatch({ type: LOGIN_STATUS, order:value });
    }
}