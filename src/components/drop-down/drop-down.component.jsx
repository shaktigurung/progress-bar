import React from 'react';

import './drop-down.styles.scss';

class DropDownList extends React.Component {

    render() {
        const {bars} = this.props;
        if(bars){
            return (
                <div className='drop-down'>
                   
                </div>
            )
        } else {
            return null;
        }
       
    
    }   
};

export default DropDownList;