// 6- import action type to connect with reducers,(5 from actions) do this so we dont make typos
import { EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER } from '../actions/type';

//empty object with email property
const INITIAL_STATE = { 
email: '', 
password: '', 
user: null, 
error:'',
loading: false
};
// 1-need to wire with index.js
export default (state = INITIAL_STATE, action) => {
   
    switch(action.type){
        // 6- take data from actions give to reducer by change state 
        case EMAIL_CHANGED:
        //below will not work because state and action will point to same address. No changes will be detected
        //return state.email = action.payload 
        //below we create whole new object with email property with new address
        // ...state - mean we will over-written 'email' object above with new one
            return { ...state, email: action.payload };
            // now AuthReducer's state is : state = {email: action.payload }
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

            // when logged in, we store user data in state.auth.user
            // reset all initial state
        case LOGIN_USER_SUCCESS:
            console.log('------------------------------------');
            console.log("login sucess");
            console.log('------------------------------------');
            return{...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
        console.log('------------------------------------');
            console.log("login fail");
            console.log('------------------------------------');
            return {...state, error: 'Authentication Failed.', loading: false};
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        default:
            return state;
    }
};