import React from "react";
import Header from "../components/molecules/Header";
import PhotoList from "../components/molecules/PhotoList";

import useApp from "./hooks/useApp";

interface Props {}

const App = (props: Props) => {
    const { photoList } = useApp();
    return (
        <React.Fragment>
            <Header></Header>
            <PhotoList {...photoList}></PhotoList>
        </React.Fragment>
    );
};

export default App;
