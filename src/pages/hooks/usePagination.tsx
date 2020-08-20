import { useState } from "react";

export interface IusePagination {
    state: {
        page: number;
    };
    handleNextPage: () => void;
}

export default function usePagination(): IusePagination {
    const [state, setState] = useState({ page: 0 });

    function handleNextPage() {
        setState((val) => ({
            page: val.page++,
        }));
    }

    function resetPage() {
        setState((val) => ({
            page: 0,
        }));
    }

    return { state, handleNextPage };
}
