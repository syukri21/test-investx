import usePhotoList from "../../hooks/use.photo-list";

export default function useApp() {
    const photoList = usePhotoList();
    return { photoList };
}
