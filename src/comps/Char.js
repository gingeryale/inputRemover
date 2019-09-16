import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '1rem',
        margin: '1rem',
        border: '1px solid blue',
        textAlign: 'center'
    }
    return (
        <span style={style} onClick={props.remover}>
            {props.charac}
        </span>
    )
}

export default char;