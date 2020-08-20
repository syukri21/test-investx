import React from "react";
import Container from "../atoms/Container";
import Card from "./Card";

interface Props {
    data: PhotoType.PhotoListResponses;
    loading: boolean;
}

const PhotoLoading = () => (
    <Container>
        <span>Loading..</span>
    </Container>
);

const PhotoList = ({ loading, data }: Props) => {
    console.log("PhotoList -> data", data);
    if (loading) return <PhotoLoading></PhotoLoading>;
    return (
        <Container>
            <div className='grid grid-cols-5 gap-4'>
                {data.documents.map((item, index) => (
                    <Card key={index} data={item}></Card>
                ))}
            </div>
        </Container>
    );
};

export default PhotoList;
