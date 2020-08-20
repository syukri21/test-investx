import Api from "../api/api";

const PhotoRepository = {
    getAllPhoto: (data: { skip: number; limit: number }) => (url: string) => Api.fetcher(url, { method: "POST", data }),
};

export default PhotoRepository;
