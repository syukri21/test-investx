import React from "react";
import Container from "../atoms/Container";
import Card from "./Card";

interface Props {
    data: PhotoType.PhotoListResponses | undefined;
    loading: boolean;
    isDeleteState: boolean;
}

const PhotoLoading = () => (
    <Container>
        <span>Loading..</span>
    </Container>
);

const PhotoList = ({ loading, data, isDeleteState }: Props) => {
    if (loading && data) return <PhotoLoading></PhotoLoading>;
    return (
        <Container>
            <div className='grid grid-cols-5 gap-4'>
                {data?.documents.map((item, index) => (
                    <Card isDeleteState={isDeleteState} key={item.id} data={item}></Card>
                ))}
            </div>
        </Container>
    );
};

export default PhotoList;
