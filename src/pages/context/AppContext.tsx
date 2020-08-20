import React from "react";
import useDropdown from "../hooks/useDropdown";

const AppContext = React.createContext<any>({});

const Provider = AppContext.Provider;

export function withAppProvider(Component: React.FC<any>) {
    return (props: any) => {
        const dropdown = useDropdown();
        return (
            <Provider value={{ dropdown }}>
                <Component {...props}></Component>
            </Provider>
        );
    };
}

export default AppContext;
