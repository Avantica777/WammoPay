import { LOGIN_STATUS } from '../actionTypes';

const initialState = {
  status: null,
};

export default function login(state = initialState, action = {}) {

  switch (action.type) {
    case LOGIN_STATUS:
      return {
        status: LOGIN_STATUS,
        order: action.order
    };

    default:
      return state;
  }
}