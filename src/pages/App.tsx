import React from "react";
import Header from "../components/molecules/Header";
import PhotoList from "../components/molecules/PhotoList";

import useApp from "./hooks/useApp";

import { withAppProvider } from "./context/AppContext";
import Button from "../components/atoms/Button";

interface Props {}

const App = (props: Props) => {
    const { photoList, handleLoadMore, isLastPage, isDeleteState } = useApp();

    return (
        <React.Fragment>
            <Header></Header>
            <PhotoList {...photoList} isDeleteState={isDeleteState}></PhotoList>
            <div className='flex justify-center items-center py-8'>
                {!isLastPage && (
                    <Button width='auto' onClick={handleLoadMore}>
                        <span className='text-gray-600'>Load More</span>
                    </Button>
                )}
            </div>
        </React.Fragment>
    );
};

export default withAppProvider(App);
