import React from "react";
import Modal from "react-modal";
import useAppContext from "../../pages/hooks/useAppContext";
import useDrop from "./hooks/use.drop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCloudUploadAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../atoms/Button";
import DropdownAlbum from "./fragments/DropdownAlbum";
import useDropdownAlbum from "./hooks/use-dropdown-album";
import { mutateCallback } from "swr/dist/types";
import PhotoList from "../molecules/PhotoList";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 10000,
  },
};

Modal.setAppElement("#root");

interface Props {
  photoList: {
    loading: boolean;
    data: PhotoType.PhotoListResponses | undefined;
    mutate: (data?: PhotoType.PhotoListResponses) => {};
  };
}

const Upload = (props: Props) => {
  const { uploadModal } = useAppContext();
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    images,
    uploadPhotos,
  } = useDrop({ mutate: props.photoList.mutate });
  const {
    state,
    handleChooseDropdown,
    handleToggleDropdown,
  } = useDropdownAlbum();

  return (
    <Modal
      isOpen={uploadModal.isOpen}
      onAfterOpen={uploadModal.afterOpenModal}
      onRequestClose={uploadModal.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="mb-2 flex justify-between items-center">
        <h1 className="font-semibold text-xl">Upload Photos</h1>
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          className="text-gray-700 font-light cursor-pointer"
          onClick={uploadModal.closeModal}
        ></FontAwesomeIcon>
      </div>
      <div
        {...getRootProps()}
        className="focus:outline-none"
        style={{ width: 600, minHeight: 250 }}
      >
        <div className="p-8 border border-dashed rounded-md text-center">
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        <div>
          {images.map((item, index) => {
            return (
              <div key={index} className="py-1 px-3 border my-2">
                <span className="text-xs">{item.name}</span>
              </div>
            );
          })}
        </div>
        <input {...getInputProps()} />
      </div>
      <div className="flex justify-between">
        <DropdownAlbum in={state.isOpen} onChoose={handleChooseDropdown}>
          <Button onClick={handleToggleDropdown}>
            <span className="text-gray-600 mr-2">{state.data}</span>
            <FontAwesomeIcon className="text-gray-600" icon={faChevronDown} />
          </Button>
        </DropdownAlbum>

        <Button onClick={uploadPhotos(state.data)}>
          <FontAwesomeIcon className="text-gray-600" icon={faCloudUploadAlt} />
          <span className="text-gray-600 ml-2">Upload</span>
        </Button>
      </div>
    </Modal>
  );
};

export default Upload;
