import React from 'react';

const userOutput = (props) => {
    const userName = props.userName || 'unavailable';
    const userNameStyle = {
        textTransform: 'capitalize'
    };
    
    return (
        <div>
            <p><b>User name: </b> </p>
            <p style={userNameStyle}>{userName}</p>
        </div>
    );
}; 

export default userOutput;