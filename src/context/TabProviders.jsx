import React, { useContext, useReducer, useState } from "react";

const TabsContext = React.createContext(); // for show state
const TabsContextDispatcher = React.createContext(); // for set state

const initialState = [];

const reducer = (state, action) => {

  switch (action.type) {
    case "addTab":
      const existTab = state.find((item) => item.key == action.value.key);
      return existTab ? [...state] : [...state, action.value];

    case "restTab":
      return [...action.value];

    default:
      break;
  }
};

const TabProvider = ({ children }) => {
  const [tabs, dispatch] = useReducer(reducer, initialState);

  return (
    <TabsContext.Provider value={tabs}>
      <TabsContextDispatcher.Provider value={dispatch}>
        {children}
      </TabsContextDispatcher.Provider>
    </TabsContext.Provider>
  );
};

export default TabProvider;

export const useTabs = () => useContext(TabsContext);
export const useTabsAction = () => useContext(TabsContextDispatcher);
