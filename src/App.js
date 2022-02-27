import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from "./pages/main/Main.js"
import MbtiInfo from './pages/mbtiGetInfo/MbtiInfo.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/MbtiInfo" component={MbtiInfo}/>
      </Switch>
    </div>
  );
}

export default App;
