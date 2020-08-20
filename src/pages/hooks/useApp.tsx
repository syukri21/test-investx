import usePhotoList from "../../hooks/use.photo-list";
import useAppContext from "./useAppContext";

export default function useApp() {
    const { dropdown } = useAppContext();
    const photoList = usePhotoList({ limit: dropdown.state.data, skip: 0 });

    
    return { photoList };
}
