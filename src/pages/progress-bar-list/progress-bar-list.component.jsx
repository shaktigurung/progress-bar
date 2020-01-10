import React from 'react';
import ProgressBar from './../../components/progress-bar/progress-bar.component';

const ProgressBarList = ({bars, limit}) => {
    if(bars){
        return( 
        <div className='progress-bar-list'>
            {
                bars.map(bar => {
                    return <ProgressBar key={bar.id} percentage={bar} limit={limit} />
                })
            }
        </div>
    )} else {
        return null;
    }
}

export default ProgressBarList;