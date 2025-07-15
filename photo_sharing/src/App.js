import React from "react"; 
import Users from "./users/pages/Users.js";
import Newloc from "./locations/pages/Newloc.js";

import {BrowserRouter as Router, Route} from "react-router-dom";


const App = () => {


    return(
      
    <div>
      <Router>
        {/* created a default home page eg: picpot/ , that will give users liston frontend webpage */}
        <Route path = "/" >        
            <Users/>
        </Route>

        <Route path = "/loc/new">
        <Newloc/>
        </Route>
        
      </Router>

        


      </div>
    );

}

export default App;