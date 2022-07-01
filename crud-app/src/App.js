import React from "react";
// import './App.css';
import {BrowserRouter as Router, Switch ,Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import {GlobalProvider } from "./context/GlobalState";

import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  
  return(

    <div style={{maxwidth: "30rem", margin: "4rem auto"}}>
      <GlobalProvider>
      <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/adduser" component={AddUser}></Route>
            <Route exact path="/edit/:id" component={EditUser}></Route>

        </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
   
}

export default App;
