import React from "react"; 
import Users from "./users/pages/Users.js";
import Newloc from "./locations/pages/Newloc.js";

import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


const App = () => {


    return(
      
    <div>
      {/* route,redirect,switch etc.. are all router's components */}

      <Router>

        <Switch>

        {/* created a default home page eg: picpot/ , that will give users liston frontend webpage */}
        <Route path = "/" exact>        
            <Users/>
        </Route>

        <Route path = "/loc/new" exact>
        <Newloc/>
        </Route>
      {/* EXACT is used bcz when we run /loc/new, it shows users content also with that & we don't want it */}

      <Redirect to="/" />
      {/* if we gave any useless path,it will redirect to userspage(default/home page) */}

      </Switch>






      </Router>

        


      </div>
    );

}

export default App;