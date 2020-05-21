import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {


    return (<div className={'CharComponent'} onClick={props.clicked}>
        {props.character}
    </div>);
}

export default charComponent;