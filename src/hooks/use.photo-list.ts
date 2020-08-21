import useSWR from "swr";
import { useMemo } from "react";
import PhotoRepository from "../repositories/PhotoRepository";

export default function usePhotoList({ limit = 25, skip = 0 }) {
    const params = useMemo(() => ["/photos/list", { skip: 0, limit }], [limit]);
    const { data, error, mutate } = useSWR<PhotoType.PhotoListResponses>(params, PhotoRepository.getAllPhoto, {
        refreshInterval: 0,
        revalidateOnFocus: false,
        refreshWhenHidden: false,
    });

    const loading = !data && !error;

    return {
        loading,
        data,
        mutate,
    };
}
