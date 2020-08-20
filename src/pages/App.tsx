import React from "react";
import Header from "../components/molecules/Header";
import PhotoList from "../components/molecules/PhotoList";

import useApp from "./hooks/useApp";

import { Provider } from "./context/AppContext";
import useDropdown from "./hooks/useDropdown";
interface Props {}

const App = (props: Props) => {
    const { photoList } = useApp();
    const dropdown = useDropdown();
    return (
        <Provider value={{ dropdown }}>
            <React.Fragment>
                <Header></Header>
                <PhotoList {...photoList}></PhotoList>
            </React.Fragment>
        </Provider>
    );
};

export default App;
