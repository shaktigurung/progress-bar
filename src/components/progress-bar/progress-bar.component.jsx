import React from 'react';
import PropTypes from 'prop-types';

import ProgressFiller from './../progress-filler/progress-filler.component';

import './progress-bar.styles.scss';

class ProgressBar extends React.Component {

    render(){
        const {percentage, limit, selected } = this.props;
        console.log( "Progressbar:", selected);
        return (
            <>
            <label> Progress bar {percentage} </label>
            <div className='progress-bar' style={{width:`${limit}px`}} >
                <ProgressFiller percentage={percentage} selected={selected} />
            </div>
            </>
        )
    }

} 

ProgressBar.propsTypes = {
    percentage: PropTypes.number
}
   
export default ProgressBar;