import { combineReducers } from 'redux';
import SoundReducer from './SoundReducer';
import AuthReducer from './AuthReducer';
export default combineReducers({
    auth: AuthReducer,

    soundData: SoundReducer
})