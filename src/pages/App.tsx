import React from "react";
import Header from "../components/molecules/Header";
import PhotoList from "../components/molecules/PhotoList";

import useApp from "./hooks/useApp";

import { withAppProvider } from "./context/AppContext";
import Button from "../components/atoms/Button";
import useAppContext from "./hooks/useAppContext";
import PhotoRepository from "../repositories/PhotoRepository";

interface Props {}

const App = (props: Props) => {
    const { pagination, dropdown } = useAppContext();
    const { photoList } = useApp();

    const handleLoadMore = React.useCallback(async () => {
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

    return (
        <React.Fragment>
            <Header></Header>
            <PhotoList {...photoList}></PhotoList>
            <div className='flex justify-center items-center py-8'>
                {!pagination.state.isLastPage && (
                    <Button width='auto' onClick={handleLoadMore}>
                        <span className='text-gray-600'>Load More</span>
                    </Button>
                )}
            </div>
        </React.Fragment>
    );
};

export default withAppProvider(App);
