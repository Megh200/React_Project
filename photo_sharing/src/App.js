import React, {useState} from "react"; 
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Users from "./users/pages/Users.js";
import Newloc from "./locations/pages/Newloc.js";
import Mainnav from "./common/components/Navigation/Mainnav.js";
import Userlocation from "./locations/pages/UserLocation.js";
import Login from "./users/pages/Login.js";
import { LoginContext } from "./common/components/context.js";

const App = () => {

  const[login,setlogin] = useState(false);

    return(
      
    <LoginContext.Provider  >
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

        <Route path="/login" exact >
          <Login/>
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
