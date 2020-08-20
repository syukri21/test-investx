import React from "react";

interface Props {}

const App = (props: Props) => {
    return (
        <input
            className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
            type='email'
            placeholder='jane@example.com'
        ></input>
    );
};

export default App;
