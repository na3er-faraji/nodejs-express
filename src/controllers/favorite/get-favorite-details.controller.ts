import favoriteDB from "../../data-access/favorite";

const fetchFavoriteDetailsController = () => {
  return async function getDetails(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        ...info,
        source,
        id: httpRequest.params.id,
      };

      const favorite = favoriteDB.getFavoriteById(httpRequest.params.id || 0)

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
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

export default fetchFavoriteDetailsController;
