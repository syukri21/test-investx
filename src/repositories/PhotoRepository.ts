import Api from "../api/api";

const PhotoRepository = {
    getAllPhoto: (data: { skip: number; limit: number }) => (url: string) =>
        Api.fetcher(url, { method: "POST", data }).then((res) => {
            console.log("res", res);

            return res.data;
        }),
};

export default PhotoRepository;
