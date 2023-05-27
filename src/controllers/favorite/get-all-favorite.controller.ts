import favoriteDB from "../../data-access/favorite";
import { ResponseSuccess, ResponseError } from "../../utils/response";

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
      return ResponseSuccess(favorite);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllFavoriteController;
