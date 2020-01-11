import {BarsActionTypes} from './bars.types';
import axios from 'axios';

export const fetchBarsRequest = () => {
  return {
    type: BarsActionTypes.FETCH_BARS_REQUEST
  }
}

export const fetchBarsSuccess = bars => {
  return {
    type: BarsActionTypes.FETCH_BARS_SUCCESS,
    payload: bars
  }
}

export const fetchBarsFailure = error => {
  return {
    type: BarsActionTypes.FETCH_BARS_FAILURE,
    payload: error
  }
}

export const fetchBars = () => {
  return (dispatch) => {
    dispatch(fetchBarsRequest)
    axios.get('http://pb-api.herokuapp.com/bars')
      .then(response => {
        const bars = response.data
        dispatch(fetchBarsSuccess(bars))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchBarsFailure(errorMsg))
      })
  }
}


    

      
