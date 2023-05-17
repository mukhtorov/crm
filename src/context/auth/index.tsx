import React, { createContext, useReducer } from "react";

export const AuthContext: any = createContext("");

export const AuthProvider = (props: any) => {
  // const [list, dispatch]= useReducer(()=>{},'')
  return (
    <AuthContext.Provider value={"web"}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
