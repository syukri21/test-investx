import React from "react";
import useDropdown from "../hooks/useDropdown";
import usePagination from "../hooks/usePagination";
import useDeletePhotos from "../hooks/useDeletePhotos";
import useUploadModal from "../../components/modals/hooks/use.upload-modal";
import usePhotoList from "../../hooks/use.photo-list";

const AppContext = React.createContext<any>({});

const Provider = AppContext.Provider;

export function withAppProvider(Component: React.FC<any>) {
  return (props: any) => {
    const dropdown = useDropdown();
    const pagination = usePagination();
    const deletePhotos = useDeletePhotos();
    const uploadModal = useUploadModal();
    const photoList = usePhotoList({
      limit: dropdown.state.data,
      skip: pagination.state.page * dropdown.state.data,
    });

    return (
      <Provider
        value={{ dropdown, pagination, deletePhotos, uploadModal, photoList }}
      >
        <Component {...props}></Component>
      </Provider>
    );
  };
}

export default AppContext;
