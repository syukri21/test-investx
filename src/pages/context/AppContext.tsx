import React from "react";
import useDropdown from "../hooks/useDropdown";
import usePagination from "../hooks/usePagination";

const AppContext = React.createContext<any>({});

const Provider = AppContext.Provider;

export function withAppProvider(Component: React.FC<any>) {
    return (props: any) => {
        const dropdown = useDropdown();
        const pagination = usePagination();
        return (
            <Provider value={{ dropdown, pagination }}>
                <Component {...props}></Component>
            </Provider>
        );
    };
}

export default AppContext;
