import { useContext } from "react";
import AppContext from "../context/AppContext";
import { IuseDropdown } from "./useDropdown";
import { IusePagination } from "./usePagination";
import { IuseDeletePhotos } from "./useDeletePhotos";
import { IuseUploadModal } from "../../components/modals/hooks/use.upload-modal";

export default function useAppContext(): {
    dropdown: IuseDropdown;
    pagination: IusePagination;
    deletePhotos: IuseDeletePhotos;
    uploadModal: IuseUploadModal;
    photoList: any;
} {
    const context = useContext(AppContext);

    if (!context) throw new Error("Wrap with App Provider");

    return context;
}
