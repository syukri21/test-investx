import { useState } from "react";

export default function useDropdown() {
    const [state, setState] = useState({ isOpen: false, data: 25 });

    function handleOpenDropdown() {
        setState((val) => ({
            ...val,
            isOpen: true,
        }));
    }

    function handleCloseDropdown() {
        setState((val) => ({
            ...val,
            isOpen: false,
        }));
    }

    function handleChooseDropdown(limit: number) {
        setState((val) => ({
            isOpen: false,
            data: limit,
        }));
    }

    return { state, handleOpenDropdown, handleCloseDropdown, handleChooseDropdown };
}
