
import { viewAllFavoriteForProfilesUseCase, viewAllFavoritesUseCase } from "../../use-cases/favorite";
import fetchAllFavoriteController from "./get-all-favorite.controller";
import fetchFavoriteForProfileController from "./get-favorite-for-profile.controller";

export const getAllFavoriteController = fetchAllFavoriteController({ viewAllFavoritesUseCase });
export const getFavoriteForProfileController = fetchFavoriteForProfileController({ viewAllFavoriteForProfilesUseCase });
