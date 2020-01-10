import React from 'react';

import './progress-filler.styles.scss';

const ProgressFiller = ({percentage}) => {
    return <div className='progress-filler' style={{width:`${percentage}%` }}/>
};

export default ProgressFiller;