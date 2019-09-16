import React from 'react';


const validator = (props) => {
    let validationMessage = 'Text Meets minimum length';

    if (props.inputLength <= 5) {
        validationMessage = "Text is too Short"
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}


export default validator;