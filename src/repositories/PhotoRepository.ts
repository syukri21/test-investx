import Api from "../api/api";

const PhotoRepository = {
  getAllPhoto: (url: string, data: any) => {
    return Api.fetcher(url, { method: "POST", data });
  },
};

export default PhotoRepository;
