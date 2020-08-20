import { useContext } from "react";
import AppContext from "../context/AppContext";
import { IuseDropdown } from "./useDropdown";

export default function useAppContext(): { dropdown: IuseDropdown } {
    const context = useContext(AppContext);

    if (!context) throw new Error("Wrap with App Provider");

    return context;
}
