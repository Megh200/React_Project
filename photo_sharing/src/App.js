import React, { useState, useCallback } from "react"; 
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from "./users/pages/Users.js";
import Newloc from "./locations/pages/Newloc.js";
import Mainnav from "./common/components/Navigation/Mainnav.js";
import Userlocation from "./locations/pages/UserLocation.js";
import LogIn from "./users/pages/LogIn.js";
import { LoginContext } from "./common/components/context.js";

const App = () => {

  // passed false in useState hook to the var. isloggedin
  const[isLoggedin,setisloggedin] = useState(false);

  // Hook "useCallback()" takes 2 arguments, that's why we
  // passed a method then an empty array
  const Login = useCallback( () =>{
    setisloggedin(true);
  }, [] );

  const Logout = useCallback( () =>{
    setisloggedin(false);
  }, [] );
  // now passing these var. & methods
  // to LoginContext.Provider's "value" as obj bcz in context.js
  // they are in object

    return(
      
    <LoginContext.Provider value={ {isloggedin:isLoggedin, login:Login, logout:Logout } } >
      {/* route,redirect,switch etc.. are all router's components  */}

      <Router>

        <Mainnav/>

        <main>
        <Switch>

        {/* created a default home page eg: picpot/ , that will give users liston frontend webpage */}
        <Route path = "/" exact>        
            <Users/>
        </Route>

        <Route path="/:userid/locations" >
          <Userlocation />
        </Route>

        <Route path="/Login" exact >
          <LogIn/>
        </Route>

        <Route path = "/loc/new" exact>
        <Newloc/>
        </Route>
      {/* EXACT is used bcz when we run /loc/new, it shows users content also with that & we don't want it */}

      <Redirect to="/" />
      {/* if we gave any useless path,it will redirect to userspage(default/home page) */}

      </Switch>
      </main>
      <div></div>

      </Router>

       </LoginContext.Provider>


      );

}

export default App;
