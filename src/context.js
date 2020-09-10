import React, { createContext, useReducer, useContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ reducer, initialState, children }) => {
  return (
    <BasketContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BasketContext.Provider>
  );
};

export const useStateValue = () => useContext(BasketContext);
