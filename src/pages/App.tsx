import React from "react";
import Header from "../components/molecules/Header";
import PhotoList from "../components/molecules/PhotoList";

import useApp from "./hooks/useApp";

interface Props {}

const App = (props: Props) => {
    const { photoList } = useApp();
    console.log("App -> photoList", photoList);
    return (
        <React.Fragment>
            <Header></Header>
            <PhotoList></PhotoList>
        </React.Fragment>
    );
};

export default App;
