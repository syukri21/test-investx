import { useState } from "react";

export interface IuseDropdownAlbum {
    state: {
        isOpen: boolean;
        data: string;
    };
    handleOpenDropdown: () => void;
    handleCloseDropdown: () => void;
    handleChooseDropdown: (limit: string) => void;
    handleToggleDropdown: () => void;
}
export default function useDropdownAlbum(): IuseDropdownAlbum {
    const [state, setState] = useState({ isOpen: false, data: "Select album" });

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

    function handleToggleDropdown() {
        setState((val) => ({
            ...val,
            isOpen: !val.isOpen,
        }));
    }

    function handleChooseDropdown(limit: string) {
        setState((val) => ({
            isOpen: false,
            data: limit,
        }));
    }

    return { state, handleOpenDropdown, handleCloseDropdown, handleChooseDropdown, handleToggleDropdown };
}
