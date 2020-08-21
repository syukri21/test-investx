import { useState } from "react";

export interface IusePagination {
    state: {
        isLastPage: boolean;
        page: number;
    };

    handleNextPage: (lastPage?: boolean) => void;
    resetPage: () => void;
}

export default function usePagination(): IusePagination {
    const [state, setState] = useState({ page: 0, isLastPage: false });

    function handleNextPage(lastPage = false) {
        setState((val) => {
            return {
                ...val,
                page: state.page + 1,
                isLastPage: lastPage,
            };
        });
    }

    function resetPage() {
        setState((val) => ({
            page: 0,
            isLastPage: false,
        }));
    }

    return { state, handleNextPage, resetPage };
}
