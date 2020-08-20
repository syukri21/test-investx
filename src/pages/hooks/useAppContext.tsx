import { useContext } from "react";
import AppContext from "../context/AppContext";
import { IuseDropdown } from "./useDropdown";
import { IusePagination } from "./usePagination";

export default function useAppContext(): { dropdown: IuseDropdown; pagination: IusePagination } {
    const context = useContext(AppContext);

    if (!context) throw new Error("Wrap with App Provider");

    return context;
}
