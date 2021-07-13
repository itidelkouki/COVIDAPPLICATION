import {
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERRORS,
  } from '../constants/ActionsTypes';
  
  const initialState = {
    token: localStorage.getItem('token'), //null
    doctor: null,
    isAuthDoctor: false,
    loading: true,
    msg: null,
  };
  
  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case USER_LOADING:
        return {
          ...state,
          loading: true,
        };
      case REGISTER_USER:
      case LOGIN_USER:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          loading: false,
          isAuthDoctor: true,
          msg: payload.msg,
          ...payload,
         // doctor:payload.doctor
        };
      case GET_AUTH_USER:
        console.log(payload);
        return {
          ...state,
          loading: false,
          isAuthDoctor: true,
          ...payload,
        };
      case AUTH_ERRORS:
      case LOGOUT_USER:
        //localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthDoctor: false,
          doctor: null,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;