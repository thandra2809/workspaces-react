import React from 'react';

const validationComponent = (props) => {

    let validMessage = "Text too Long";

    if (props.inputTextLength > 0 && props.inputTextLength <= 5) {
        validMessage = "Text too Short"
    } else if (props.inputTextLength <= 0) {
        validMessage = "Please enter some text"
    }

    return (
        <div>
            <p>{validMessage}</p>
        </div>);
}

export default validationComponent;