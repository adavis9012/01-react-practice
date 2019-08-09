import React from 'react';
import './UserInput.css'

const userInput = (props) => (
    <div className='user-input'>
        <input type='text' value={props.defaultUserName} onChange={ props.userChange } />
    </div>
);


export default userInput;