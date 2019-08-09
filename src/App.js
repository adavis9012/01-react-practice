import React, {useState} from 'react';
import UserInput from "./Users/UserInput";
import UserOutput from "./Users/UserOutput";
import './App.css';

const app = () => {
  const [userState, setUserState] = useState({
    userName: 'david'
  });

  const changeUsernameHandler = (event) => {
    setUserState({
      userName: event.target.value 
    });
  };

  return (
    <div className="App">
      <UserInput defaultUserName={userState.userName} userChange={changeUsernameHandler}/>
      <UserOutput userName={userState.userName} />
    </div>
  );
};

export default app;
