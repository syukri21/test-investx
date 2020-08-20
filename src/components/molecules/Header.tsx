import React from "react";
import Container from "../atoms/Container";

interface Props {}

const Header = (props: Props) => {
    return (
        <Container>
            <div className='flex justify-between items-center py-2'>
                <div>
                    <span className="text-3xl font-medium" >Photos</span>
                </div>
                <div>
                </div>
            </div>
        </Container>
    );
};

export default Header;
