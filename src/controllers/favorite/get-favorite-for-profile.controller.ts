import favoriteDB from "../../data-access/favorite";
import { ResponseSuccess, ResponseError } from "../../utils/response";

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

      const favorite = await favoriteDB.getFavoriteForProfile(
        httpRequest.params.id
      );
      return ResponseSuccess(favorite);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchFavoriteForProfileController;
