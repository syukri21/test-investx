import { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

export default function useDrop() {
    const [images, setImages] = useState<Array<any>>([]);
    const onDrop = useCallback((acceptedFiles) => {
        console.log("onDrop -> acceptedFiles", acceptedFiles);
        setImages((val) => {
            return [...val, ...acceptedFiles];
        });
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: ["image/jpeg", "image/png"] });
    return { getRootProps, getInputProps, isDragActive, images };
}
