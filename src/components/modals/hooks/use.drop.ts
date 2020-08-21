import { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

import api from "../../../api/api";
import useAppContext from "../../../pages/hooks/useAppContext";

export default function useDrop({ mutate }: { mutate: any }) {
    const [images, setImages] = useState<Array<any>>([]);
    const { uploadModal } = useAppContext();

    const [successUpload, setSuccessUpload] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        setImages((val) => {
            return [...val, ...acceptedFiles];
        });
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: ["image/jpeg", "image/png"] });

    const uploadPhotos = (album: string) => async () => {
        try {
            const posts = images.map((val) => {
                const form = new FormData();

                form.append("album", album === "Select album" ? "other" : album);
                form.append("documents", val);

                return api.fetcher("/photos", {
                    method: "PUT",
                    headers: {
                        contentType: "multipart/form-data",
                    },
                    data: form,
                });
            });
            const result: any = await Promise.all(posts);
            const imgs = result.map((r: any) => ({
                ...r.data[0],
                raw: r.data[0].raw.replace("http://http://localhost:3000", "http://localhost:8888"),
            }));
            console.log("uploadPhotos -> imgs", imgs);
            setSuccessUpload(true);
            mutate((val: PhotoType.PhotoListResponses) => ({ ...val, documents: [...imgs, ...val.documents] }), false);
            uploadModal.closeModal();
        } catch (err) {
            alert(JSON.stringify(err));
        }
    };
    return { getRootProps, getInputProps, isDragActive, images, uploadPhotos, successUpload };
}
