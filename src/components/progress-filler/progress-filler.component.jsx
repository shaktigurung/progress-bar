import React from 'react';

import './progress-filler.styles.scss';

const ProgressFiller = ({percentage, selected}) => {
    console.log("Progress Filler:", selected);
    return <div className='progress-filler' style={{width:`${percentage}%`, backgroundColor: ` ${selected} == ${percentage} ? "red" : "blue"`}} />
};

export default ProgressFiller;