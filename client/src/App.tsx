import React from 'react';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
 import Login from './components/Login';
import "./App.css";
import Sidebar from './components/Sidebar';
import Conversations from './Conversations';


export default function App() {
  return (
    

 <div className="app">
 
   
   
 <div className="app__body">
            
         <Router > 
         
           <Switch>
           <Route path="/" exact component={Login}/>
           <Route path="/Sidebar" exact component={Sidebar}/>
          
           <Route path="/rooms/:roomId" >
            
              <Sidebar/>
              <Conversations/>  
           
             </Route>
           </Switch>
         </Router>
      
      
  </div>
  </div>
  
  )
}


