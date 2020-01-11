import {BarsActionTypes} from './bars.types';

const INITIAL_STATE = {
    loading:false,
    bars: [],
    error: ''
}

const barsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case BarsActionTypes.FETCH_BARS_REQUEST:
            return {
                ...state,
                loading: true
        }
        case BarsActionTypes.FETCH_BARS_SUCCESS:
            return {
                loading: false,
                bars: action.payload,
                error: ''
        }
        case BarsActionTypes.FETCH_BARS_FAILURE:
            return {
                loading: false,
                bars: [],
                error: action.payload
        }
        default:
            return state;
    }
}

export default barsReducer;