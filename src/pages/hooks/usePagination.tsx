import { useState } from "react";

export interface IusePagination {
    state: {
        page: number;
    };
    handleNextPage: () => void;
    resetPage: () => void;
}

export default function usePagination(): IusePagination {
    const [state, setState] = useState({ page: 0 });

    function handleNextPage() {
        setState((val) => {
            return {
                page: state.page + 1,
            };
        });
    }

    function resetPage() {
        setState((val) => ({
            page: 0,
        }));
    }

    return { state, handleNextPage, resetPage };
}
