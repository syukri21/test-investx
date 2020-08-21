import React from "react";
import useDropdown from "../hooks/useDropdown";
import usePagination from "../hooks/usePagination";
import useDeletePhotos from "../hooks/useDeletePhotos";

const AppContext = React.createContext<any>({});

const Provider = AppContext.Provider;

export function withAppProvider(Component: React.FC<any>) {
    return (props: any) => {
        const dropdown = useDropdown();
        const pagination = usePagination();
        const deletePhotos = useDeletePhotos();

        return (
            <Provider value={{ dropdown, pagination, deletePhotos }}>
                <Component {...props}></Component>
            </Provider>
        );
    };
}

export default AppContext;
