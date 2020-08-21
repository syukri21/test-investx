import React from "react";
import useDropdown from "../hooks/useDropdown";
import usePagination from "../hooks/usePagination";
import useDeletePhotos from "../hooks/useDeletePhotos";
import useUploadModal from "../../components/modals/hooks/use.upload-modal";

const AppContext = React.createContext<any>({});

const Provider = AppContext.Provider;

export function withAppProvider(Component: React.FC<any>) {
    return (props: any) => {
        const dropdown = useDropdown();
        const pagination = usePagination();
        const deletePhotos = useDeletePhotos();
        const uploadModal = useUploadModal();

        return (
            <Provider value={{ dropdown, pagination, deletePhotos, uploadModal }}>
                <Component {...props}></Component>
            </Provider>
        );
    };
}

export default AppContext;
