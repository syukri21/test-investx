import useSWR from "swr";
import { useMemo } from "react";
import PhotoRepository from "../repositories/PhotoRepository";

export default function usePhotoList({ limit = 25, skip = 0 }) {
    const params = useMemo(() => ["/photos/list", { skip, limit }], [skip, limit]);
    const { data, error, mutate } = useSWR(params, PhotoRepository.getAllPhoto);

    const loading = !data && !error;

    return {
        loading,
        data,
        mutate,
    };
}
