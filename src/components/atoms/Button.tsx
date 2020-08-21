import styled from "styled-components";
import React from "react";
const Button: React.FC<any> = styled.button.attrs({
    className:
        "hover:bg-gray-200 w-full flex justify-between items-center transition-all ease-linear duration-300 focus:outline-none focus:border-gray-600 border  py-1 px-3",
})`
    width: ${(props: any) => props.width};
`;

export default Button;
