import React from "react";
import Container from "../atoms/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const Header = (props: Props) => {
    return (
        <Container>
            <div className='flex justify-between items-center py-2'>
                <div>
                    <span className='text-3xl font-medium'>Photos</span>
                </div>
                <div className='grid grid-cols-2 gap-x-4 divide-x divide-gray-600'>
                    <button className='hover:bg-gray-200 transition-all ease-linear duration-300 focus:outline-none focus:border-gray-600 border  py-1 px-3'>
                        <FontAwesomeIcon className='text-gray-600' icon={faCloudUploadAlt} />
                        <span className='text-gray-600 ml-2'>Upload</span>
                    </button>
                    <span className='text-center text-gray-600'>25</span>
                </div>
            </div>
        </Container>
    );
};

export default Header;
