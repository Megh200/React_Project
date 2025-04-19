import React from "react"; 
import Users from "./users/pages/Users.js";
import NL from "./locations/pages/newloc.js";

import {BrowserRouter as Router, Route} from "react-router-dom";

import "./index.css";

const App = () => {


    return(

    //     <div>

    //   <h1>picpot</h1>
    //   <Users/>
    //    </div>

    <div>
      <Router>
        <Route path = "/" >
            <Users/>
        </Route>

      </Router>

      <Router>
        <Route path = "/loc/new">
        <NL/>
        </Route>
      </Router>

      </div>
    );

}

export default App;