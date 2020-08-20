import useSWR from "swr";

import PhotoRepository from "../repositories/PhotoRepository";

export default function usePhotoList() {
    const { data, mutate, error } = useSWR("/photos/list", PhotoRepository.getAllPhoto({ skip: 0, limit: 10 }));

    const loading = !data && !error;

    return {
        loading,
        data,
        mutate,
    };
}
