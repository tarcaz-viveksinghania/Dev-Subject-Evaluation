import React,{createContext} from 'react';

// Creating the context object and passing the default values.
// const authContext = React.createContext({status:null,login:()=>{}});

const CurrentUserContext = createContext(null);

export default CurrentUserContext;
