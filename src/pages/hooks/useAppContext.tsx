import { useContext } from "react";
import AppContext from "../context/AppContext";
import { IuseDropdown } from "./useDropdown";
import { IusePagination } from "./usePagination";
import { IuseDeletePhotos } from "./useDeletePhotos";

export default function useAppContext(): { dropdown: IuseDropdown; pagination: IusePagination; deletePhotos: IuseDeletePhotos } {
    const context = useContext(AppContext);

    if (!context) throw new Error("Wrap with App Provider");

    return context;
}
