import React from 'react';
import {connect} from 'react-redux';

import ProgressBar from './../../components/progress-bar/progress-bar.component';

class ProgressBarList extends React.Component {
    render(){
        const {bars, limit, buttons} = this.props.barsInfo.bars;
        const {selectedBar} = this.props;
        if (bars) {
            return( 
                <>
                    <div className='progress-bar-list' style={{display: "flex", flexWrap:"wrap", justifyContent: "center"}}>
                        {
                            bars.map(bar => {
                                return (
                                    <ProgressBar key={bar.id} percentage={bar} limit={limit} buttons={buttons} />
                                )
                            })
                        }
                    
                    </div>
                    <div> 
                        <label style={{color: "#FF4500"}}> { selectedBar ? `Progress Bar ${selectedBar} is Selected` : null } </label> 
                    </div>
                </>
        )} else {
            return null;
        }
    }
}

const mapStateToProps = (state) => ({
    barsInfo: state.bars,
    selectedBar: state.form.dropdownForm && state.form.dropdownForm.values ? state.form.dropdownForm.values.favoriteBar : null
});

export default connect(mapStateToProps)(ProgressBarList);