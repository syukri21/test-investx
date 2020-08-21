import { useState } from "react";

export interface IuseDeletePhotos {
    photos: Array<string>;
    handleRemove: (id: string) => void;
    handleAdd: (id: string) => void;
    handleClear: () => void;
}

export default function useDeletePhotos(): IuseDeletePhotos {
    const [photos, setPhotos] = useState(new Array<string>());

    function handleAdd(id: string) {
        setPhotos((val) => {
            const newVal = new Set(val);
            newVal.add(id);
            return Array.from(newVal);
        });
    }

    function handleRemove(id: string) {
        setPhotos((val) => {
            const newVal = new Set(val);
            newVal.delete(id);
            return Array.from(newVal);
        });
    }
    function handleClear() {
        setPhotos((val) => {
            return [];
        });
    }

    return { photos, handleAdd, handleRemove, handleClear };
}
