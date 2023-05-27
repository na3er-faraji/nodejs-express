import favoriteDB from "../../data-access/favorite";

const fetchAllFavoriteController = () => {
  return async function getAll(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      console.log("source=", source);
      console.log("info=", info);
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
      };
      const favorite = await favoriteDB.getAllFavorite();
      console.log("favorite=", favorite);
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

export default fetchAllFavoriteController;
