//
// createDataContext is a useful function to create new contexts
// in this app we have only one, so it is not very useful
//

import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch, state); // action functions will have access to dispatch and the current state
    }

    return <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
  };

  return { Context, Provider };
};