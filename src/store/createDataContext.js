import React, { createContext, useReducer } from "react";
//basically creating a store
export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };

  return {Context, Provider}
};
