import React from "react";

const AppContext = React.createContext<any>({});

export const Provider = AppContext.Provider;

export default AppContext;
