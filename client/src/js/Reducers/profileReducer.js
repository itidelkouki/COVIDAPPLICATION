import {
    CREATE_PROFILE,
    GET_PROFILE,
    GET_PROFILE_BY_ID,
    GET_PROFILES,
    //UPDATE_PROFILE,
    PROFILE_ERROR,
    LOGOUT_USER,
    CLEAR_PROFILE,
    //GET_AUTH_USER,
    USER_LOADING,EDIT_PROFILES
    
} from '../constants/ActionsTypes';

const initialState = {

    profiles: [],
    isAuth: true,
    loading: true,
    msg: null,
    profileById: null,
    //error: {},
   // token: localStorage.getItem('token'), //null
   // isAuth: false,
    //msg: null,
}



const profileReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOADING:
        return {
          ...state,
          loading: true,
        };
    
        case CREATE_PROFILE:
        console.log(payload) ;
        return {
          ...state,
          loading: false,
          //isAuth: true,
          msg: payload.msg,
          ...payload,
        };
       
        case GET_PROFILE:
        case EDIT_PROFILES:
                return {
                  ...state,
                  loading: false,
                  isAuth: true,
                  ...payload,
                };

        case GET_PROFILE_BY_ID:
            return {
                ...state,
                //profileById: payload.profile,
                loading: false,
                isAuth:true,
                ...payload,
            };
            case GET_PROFILES:
                console.log(payload);
                return {
                    ...state,
                    profiles: payload.profiles,
                    isAuth:true,
                    loading: false
                };
        case PROFILE_ERROR:
       
            return {
                ...state,
                error: payload,
                loading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                loading: false,
                isAuth: true,
                msg: payload.msg,
                // ...payload,

            };
            case LOGOUT_USER:
                localStorage.removeItem('token');
                return {
                  ...state,
                  token: null,
                  isAuth: false,
                  
                  profileById: null,
                  loading: false,
                  msg:null
                };
                


        default:
            return state;
    }
}

export default profileReducer;