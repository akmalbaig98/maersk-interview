import React from 'react';
// import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {

  return (
    <React.Fragment>
      <Router>
        <main className='p-3'>
          <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/' component={UserPage}/> 

          </Switch>
        </main>
      </Router>
    </React.Fragment>
  )
}

export default App;
