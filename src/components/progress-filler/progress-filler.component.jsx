import React from 'react';

import './progress-filler.styles.scss';

const ProgressFiller = ({percentage}) => {
    return (
        <>
            <div 
                className='progress-filler' 
                style={{ width:`${percentage}%`, background: ( `${percentage}` >= 100 ) ? '#D95350' : '#1DA598' }} 
            > 
                { percentage }%
            </div>
        </>
    )
};

export default ProgressFiller;