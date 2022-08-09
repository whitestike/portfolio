import React, { useState } from 'react';


function FlyoutTable(props){

    const [fold, setFold] = useState(true);

    return (
        <div onClick={() => { setFold(!fold); }} className='flyout--Table'>
            <h3 className='title--table'>{props.title}</h3>

            {fold
            ? (<ul></ul>)
            : (props.table)}
        </div>
    );
}

export default FlyoutTable;