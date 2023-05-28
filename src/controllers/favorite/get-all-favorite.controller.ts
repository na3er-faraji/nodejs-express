import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchAllFavoriteController = ({ viewAllFavoritesUseCase }) => {
  return async function getAll(httpRequest) {
    try {
      const favorite = await viewAllFavoritesUseCase(httpRequest.body);
      return ResponseSuccess(favorite);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllFavoriteController;
