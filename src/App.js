import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from "./pages/main/Main.js"
import MbtiInfo from './pages/mbtiGetInfo/MbtiInfo.js';
import Header from './components/Header.js';
import './assets/css/reset.css';
import { useSelector } from 'react-redux';

function App() {
  const {userColor} = useSelector((state)=>({
    userColor:state.userData.userColor
  }));
  console.log(userColor);
  return (
    <div className="App" style={{backgroundColor: userColor}}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/MbtiInfo" component={MbtiInfo}/>
      </Switch>
    </div>
  );
}

export default App;
