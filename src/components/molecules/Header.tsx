import React, { useMemo } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faChevronDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import useAppContext from "../../pages/hooks/useAppContext";
import api from "../../api/api";

interface Props {}

const Header = (props: Props) => {
    const { dropdown, deletePhotos, uploadModal, photoList } = useAppContext();

    const isDeleteState = useMemo(() => deletePhotos.photos.length > 0, [deletePhotos.photos.length]);
    return (
        <Container>
            <div className='flex justify-between items-center py-2'>
                <div>
                    <span className='text-3xl font-medium'>Photos</span>
                </div>
                <div className={`flex  divide-x divide-gray-600`}>
                    {isDeleteState && (
                        <div className='flex items-center mx-4 justify-center'>
                            <Button
                                onClick={async () => {
                                    const photosFetch: any = photoList.data?.documents
                                        .filter((val: any) => deletePhotos.photos.includes(val.id))
                                        .map((val: any) => ({ album: val.album, documents: val.name }));

                                    api.fetcher(`/photos`, { method: "DELETE", data: photosFetch });
                                    const result = await Promise.all(photosFetch);
                                    photoList.mutate();
                                    deletePhotos.handleClear();
                                }}
                            >
                                <FontAwesomeIcon className='text-gray-600' icon={faTrashAlt} />
                                <span className='text-gray-600 ml-2'>Delete {deletePhotos.photos.length} photos</span>
                            </Button>
                        </div>
                    )}
                    <div className='flex items-center px-4 justify-center'>
                        <Button onClick={uploadModal.openModal}>
                            <FontAwesomeIcon className='text-gray-600' icon={faCloudUploadAlt} />
                            <span className='text-gray-600 ml-2'>Upload</span>
                        </Button>
                    </div>
                    <Dropdown in={dropdown.state.isOpen} onChoose={dropdown.handleChooseDropdown}>
                        <div className='flex items-center justify-start pl-4'>
                            <Button onClick={dropdown.handleToggleDropdown}>
                                <span className='text-gray-600 mr-2'>{dropdown.state.data}</span>
                                <FontAwesomeIcon className='text-gray-600' icon={faChevronDown} />
                            </Button>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </Container>
    );
};

export default Header;
