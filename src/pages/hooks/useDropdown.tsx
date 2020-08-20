import { useState } from "react";

export interface IuseDropdown {
    state: {
        isOpen: boolean;
        data: number;
    };
    handleOpenDropdown: () => void;
    handleCloseDropdown: () => void;
    handleChooseDropdown: (limit: number) => void;
    handleToggleDropdown: () => void;
}
export default function useDropdown(): IuseDropdown {
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

    function handleToggleDropdown() {
        setState((val) => ({
            ...val,
            isOpen: !val.isOpen,
        }));
    }

    function handleChooseDropdown(limit: number) {
        setState((val) => ({
            isOpen: false,
            data: limit,
        }));
    }

    return { state, handleOpenDropdown, handleCloseDropdown, handleChooseDropdown, handleToggleDropdown };
}
