import React, { useReducer } from 'react';

import Reducer from './Reducer';

const initialState = {
  regions: [],
  error: null,
  testProp:'HHH555!!!'
};
export const Context = React.createContext(initialState);
export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
