import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const hatpage = () => (
  <div>
    <h1>HEllo wolds</h1>
  </div>
)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop/hats' component={hatpage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
