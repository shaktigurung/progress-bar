//import {combineReducers} from 'redux';

// const rootReducer = combineReducers({
  
// });

const initState = {
    bars: [ 24, 19, 80, 35],
    buttons: [20, 10, 15],
    limit: 240
}

const rootReducer = ( state = initState, action) => {
    return state;
}

export default rootReducer;