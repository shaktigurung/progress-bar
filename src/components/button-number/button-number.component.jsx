import React from 'react';

import './button-number.styles.scss';

const ButtonNumber = ({value, handleClick}) => (
    <div className='button-number'>
        <button  onClick={() => handleClick(value)} >{value}</button>
    </div>
);

export default ButtonNumber;