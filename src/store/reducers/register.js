import { CREATE_USER_TRUE, CREATE_USER_FALSE } from '../actionTypes';

const initData = {
  isRegister: false,
}

export default function register(state=initData, action){
  switch(action.type){
    case CREATE_USER_TRUE:
      return {
        isRegister: true,
      }
    case CREATE_USER_FALSE:
      return {
        isRegister: false,
      }
    default:
      return state;
  }
}