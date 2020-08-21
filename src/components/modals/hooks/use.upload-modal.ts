import React from "react";

export interface IuseUploadModal {
  isOpen: boolean;
  openModal: () => void;
  afterOpenModal: () => void;
  closeModal: () => void;
}

export default function useUploadModal(): IuseUploadModal {
  const [isOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return { isOpen, openModal, closeModal, afterOpenModal };
}
