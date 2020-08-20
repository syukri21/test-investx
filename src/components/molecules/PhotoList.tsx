import React from "react";
import Container from "../atoms/Container";
import Card from "./Card";

interface Props {}

const PhotoList = (props: Props) => {
    return (
        <Container>
            <div className='grid grid-cols-5 gap-4'>
                <Card></Card>
            </div>
        </Container>
    );
};

export default PhotoList;
