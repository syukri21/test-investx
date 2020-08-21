import { useState } from "react";
import useAppContext from "../../../pages/hooks/useAppContext";

export default function useCard(data: PhotoType.Document) {
    const [isSelected, setIsSelected] = useState(false);
    const { deletePhotos } = useAppContext();

    function handleToggleSelect() {
        setIsSelected((val) => {
            if (!val) {
                deletePhotos.handleAdd(data.id);
            } else {
                deletePhotos.handleRemove(data.id);
            }
            return !val;
        });
    }
    return { isSelected, handleToggleSelect };
}
