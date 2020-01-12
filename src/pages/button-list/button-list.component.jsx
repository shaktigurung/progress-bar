import React from 'react';
import ButtonNumber from './../../components/button-number/button-number.component';

import './button-list.styles.scss';

class ButtonList extends React.Component {
    render(){
        const { buttons,handleClick } = this.props;
        if(buttons) {
            return (
                <div className='button-list'>
                   {
                       buttons.map(button => {
                           return (
                            <ButtonNumber 
                            key={button.id} 
                            value={button} 
                            handleClick={handleClick}
                            />)
                       })
                   }
                </div>
            )
        } else {
            return null;
        }
    }
} 


export default ButtonList;