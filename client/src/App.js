import React from 'react';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
// import Login from './components/Login';
import "./App.css";
import Sidebar from './components/Sidebar';
import Conversations from './Conversations';





export default function App() {
  return (
    
   //<Login/>
 <div className="app">
 
   
   
 <div className="app__body">
            
         <Router > 
         <Sidebar/>
         <Switch>

           <Route path="/rooms/:roomId">
           <Conversations/>
           </Route>
             </Switch>
             </Router>
      
      
  </div>
  </div>
  
  )
}


