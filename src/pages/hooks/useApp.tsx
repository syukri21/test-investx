import usePhotoList from "../../hooks/use.photo-list";
import useAppContext from "./useAppContext";
import { useEffect } from "react";

export default function useApp() {
    const { dropdown, pagination } = useAppContext();
    const photoList = usePhotoList({ limit: dropdown.state.data, skip: pagination.state.page * dropdown.state.data });

    useEffect(() => {
        if (dropdown.state.data) {
            pagination.resetPage();
        }
        // eslint-disable-next-line
    }, [dropdown.state.data]);

    return { photoList };
}
