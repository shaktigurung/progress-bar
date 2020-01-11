import {combineReducers} from 'redux';

import barsReducer from './bars/bars.reducer';

const rootReducer = combineReducers({
    bars: barsReducer,
});

export default rootReducer;