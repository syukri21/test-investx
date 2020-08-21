import usePhotoList from "../../hooks/use.photo-list";
import useAppContext from "./useAppContext";
import { useEffect, useCallback } from "react";
import PhotoRepository from "../../repositories/PhotoRepository";

export default function useApp() {
    const { dropdown, pagination } = useAppContext();
    const photoList = usePhotoList({ limit: dropdown.state.data, skip: pagination.state.page * dropdown.state.data });

    useEffect(() => {
        if (dropdown.state.data) {
            pagination.resetPage();
        }
        // eslint-disable-next-line
    }, [dropdown.state.data]);

    const handleLoadMore = useCallback(async () => {
        try {
            const newData: PhotoType.PhotoListResponses = await PhotoRepository.getAllPhoto("/photos/list", {
                skip: (pagination.state.page + 1) * dropdown.state.data,
                limit: dropdown.state.data,
            });

            pagination.handleNextPage(newData.documents.length < dropdown.state.data);
            photoList.mutate(
                (data: any) => ({
                    ...data,
                    documents: [...data.documents, ...newData.documents],
                }),
                false
            );
        } catch (e) {
            console.log(e.message);
        }
    }, [pagination, dropdown.state.data, photoList]);

    return { photoList, handleLoadMore, isLastPage: pagination.state.isLastPage };
}
