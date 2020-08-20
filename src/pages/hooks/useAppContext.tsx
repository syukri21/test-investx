import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function useAppContext() {
    const context = useContext(AppContext);

    if (!context) throw new Error("Wrap with App Provider");

    return context;
}
