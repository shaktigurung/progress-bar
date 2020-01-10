import ProgressBarActionTypes from './progress-bar.types';

export const setProgressBar = (bars) => ({
    type: ProgressBarActionTypes.SET_PROGRESS_BAR,
    payload: bars
});