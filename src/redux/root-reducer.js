import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import barsReducer from './bars/bars.reducer';

const rootReducer = combineReducers({
    bars: barsReducer,
    form: formReducer
});

export default rootReducer;