import { CREATE_USER_TRUE, CREATE_USER_FALSE } from '../actionTypes';
import Api from '../../api/api'

function setData(data) {
    if (data.UserID) {
        return {
            data,
            type: CREATE_USER_TRUE
        }
    } else {
        return {
            data,
            type: CREATE_USER_FALSE,
        }
    }
}

export function signupAccount(data, cb) {
    return dispatch => {
        Api.Register(data, (err, res) => {
            if (res) {
                dispatch(setData(res.Value));
            }
            if (err) {
                return cb(err);
            }
        })
    }
}

export default {
    signupAccount,
    setData,
}