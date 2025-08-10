import { createContext } from "react";

// a small function that's why exported directly
export const LoginContext = createContext(
    // since "createContext" is a hook method so there is an object in it that is
    // a var. & two functions or methods
    {
        isloggedin:false,  // we are not login now so false
        login: () =>{},
        logout: () =>{}
    }
);

// now export to App.js