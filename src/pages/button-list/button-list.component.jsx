import React from 'react';
import ButtonNumber from './../../components/button-number/button-number.component';

import './button-list.styles.scss';

const ButtonList = ({buttons}) => {
    if(buttons){
        return (
            <div className='button-list'>
               {
                   buttons.map(button => {
                       return (
                        <ButtonNumber 
                        key={button.id} 
                        value={button} 
                        />)
                   })
               }
            </div>
        )
    } else {
        return null;
    }  
};

export default ButtonList;