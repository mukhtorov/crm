import React from "react";
import AuthProvider from "./auth";

export const Context = (props: any) => {
  return <AuthProvider>{props.children}</AuthProvider>;
};

export default Context;

// store
// permisson
// insert data
// usage
