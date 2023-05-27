import favoriteDB from "../../data-access/favorite";

const fetchFavoriteForProfileController = () => {
  return async function getAll(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        ...info,
        source,
        id: httpRequest.params.id,
      };

      const favorite = await favoriteDB.getFavoriteForProfile(httpRequest.params.id)

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: favorite,
      };
    } catch (e) {
      console.log(e);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

export default fetchFavoriteForProfileController;
