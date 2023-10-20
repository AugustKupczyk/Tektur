import React from 'react';

function Box(props) {
    return (
<div className="box" style={{ border: '5px solid black', padding: '10px', marginBottom: '20px' }}>
            <img src={props.boxImage} alt={props.boxAlt} />
            <h3>{props.boxHeading}</h3>
            <p>{props.boxText}</p>
        </div>
    );
}

export default Box;
