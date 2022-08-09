import React, { useState } from 'react';

import arrowDown from "../images/arrow-circle-down-solid.svg"
import arrowUp from "../images/arrow-circle-up-solid.svg"


function FlyoutTable(props){

    const [fold, setFold] = useState(true);

    return (
        <div onClick={() => { setFold(!fold); }} className='flyout--Table'>
            {fold
            ? (<img className='img' src={arrowDown}></img>)
            : (<img className='img' src={arrowUp}></img>)}
            <h3 className='title--table'>{props.title}</h3>

            {fold
            ? (<ul></ul>)
            : (props.table)}
        </div>
    );
}

export default FlyoutTable;