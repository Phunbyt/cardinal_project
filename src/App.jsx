import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/adminpages/Register';
import Login from './pages/adminpages/Login';

const App = () => (
   <Router>
      <div className="App">
         <Switch>
            <Route exact path="/createadmin" component={Register} />
            <Route path="/loginadmin" component={Login} />
         </Switch>
      </div>
   </Router>
);

export default App;
