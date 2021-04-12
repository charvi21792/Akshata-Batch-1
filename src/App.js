import React, { Component } from 'react'
import './App.css';
import Customer from './components/Customer';
import ViewDetails from './components/ViewDetails';
import Error from './components/Error';
import {Switch,Route} from 'react-router-dom';
import DisplayCustomerList from './components/DisplayCustomerList';

function App() {
  return (
    
    <div className = "main-app">
           <Switch>
                <Route path="/" component={Customer} exact/>
                <Route path="/displaylist" component={DisplayCustomerList} />
                <Route path="/details/:id/:name/:phone/:dob/:email/:address" component={ViewDetails} />
                <Route component={Error} />
            </Switch>
      
      
    </div>
  );
}

export default App;
