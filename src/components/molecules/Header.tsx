import React from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const Header = (props: Props) => {
    return (
        <Container>
            <div className='flex justify-between items-center py-2'>
                <div>
                    <span className='text-3xl font-medium'>Photos</span>
                </div>
                <div className='grid grid-cols-2 divide-x divide-gray-600'>
                    <div className="flex items-center mr-4 justify-center">
                        <Button>
                            <FontAwesomeIcon className='text-gray-600' icon={faCloudUploadAlt} />
                            <span className='text-gray-600 ml-2'>Upload</span>
                        </Button>
                    </div>
                    <div className="flex items-center justify-start pl-4" >
                        <Button>
                            <span className='text-gray-600 mr-2'>25</span>
                            <FontAwesomeIcon className='text-gray-600' icon={faChevronDown} />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Header;
