import {ADD_SOUND, REMOVE_SOUND} from '../actions/type';

const INITIAL_STATE  = {
    sounds:[]
}

const removeSound = (list, index) => {
    return[...list.slice(0,index), ...list.slice(index + 1)];
};

export default (state = [], action) => {
    switch (action.type){
        case ADD_SOUND:
        return[...state, action.payload];
        case REMOVE_SOUND:
        return removeSound(state,action.payload);

        default:
      return state;
    }
};
