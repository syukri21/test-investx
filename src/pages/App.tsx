import React from "react";
import Header from "../components/molecules/Header";
import PhotoList from "../components/molecules/PhotoList";

interface Props {}

const App = (props: Props) => {
    return (
        <React.Fragment>
            <Header></Header>
            <PhotoList></PhotoList>
        </React.Fragment>
    );
};

export default App;
