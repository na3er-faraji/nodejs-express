import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchFavoriteForProfileController = ({
  viewAllFavoriteForProfilesUseCase,
}) => {
  return async function getAll(httpRequest) {
    try {
      const favorite = await viewAllFavoriteForProfilesUseCase(
        httpRequest.params
      );
      return ResponseSuccess(favorite);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchFavoriteForProfileController;
