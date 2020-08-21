import React from "react";
import Modal from "react-modal";
import useAppContext from "../../pages/hooks/useAppContext";

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

interface Props {}

const Upload = (props: Props) => {
    const { uploadModal } = useAppContext();
    return (
        <Modal
            isOpen={uploadModal.isOpen}
            onAfterOpen={uploadModal.afterOpenModal}
            onRequestClose={uploadModal.closeModal}
            style={customStyles}
            contentLabel='Example Modal'
        >
            <button onClick={uploadModal.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    );
};

export default Upload;
