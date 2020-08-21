import { useState } from "react";

export interface IuseDeletePhotos {
    photos: Set<string>;
    handleRemove: (id: string) => void;
    handleAdd: (id: string) => void;
    handleClear: () => void;
}

export default function useDeletePhotos(): IuseDeletePhotos {
    const [photos, setPhotos] = useState(new Set<string>());

    function handleAdd(id: string) {
        setPhotos((val) => {
            val.add(id);
            return val;
        });
    }

    function handleRemove(id: string) {
        setPhotos((val) => {
            val.delete(id);
            return val;
        });
    }
    function handleClear() {
        setPhotos((val) => {
            val.clear();
            return val;
        });
    }

    return { photos, handleAdd, handleRemove, handleClear };
}
