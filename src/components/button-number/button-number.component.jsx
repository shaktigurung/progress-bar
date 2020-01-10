import React from 'react';

import './button-number.styles.scss';

const ButtonNumber = ({value}) => (
    <div className='button-number'>
        <button  onClick={()=> console.log("Clicked!!!")} >{value}</button>
    </div>
);

export default ButtonNumber;