
import fetchAllFavoriteController from "./get-all-favorite.controller";
import fetchFavoriteDetailsController from "./get-favorite-for-profile.controller";

export const getAllFavoriteController = fetchAllFavoriteController();
export const getFavoriteByIdController = fetchFavoriteDetailsController();
