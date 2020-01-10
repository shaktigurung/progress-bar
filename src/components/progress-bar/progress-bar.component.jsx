import React from 'react';
import PropTypes from 'prop-types';

import ProgressFiller from './../progress-filler/progress-filler.component';

import './progress-bar.styles.scss';

const ProgressBar = ({percentage, limit}) => {
    return (
        <div className='progress-bar' style={{width:`${limit}px`}} >
            <ProgressFiller percentage={percentage} />
        </div>
    )
}

ProgressBar.propsTypes = {
    percentage: PropTypes.number
}
   
export default ProgressBar;