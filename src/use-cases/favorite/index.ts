import favoriteDB from "../../data-access/favorite/index";
import viewAllFavorites from "./view-all-favorite.usecase";
import viewAllFavoriteForProfile from "./view-favorite-for-profile.usecase";

export const viewAllFavoritesUseCase = viewAllFavorites({ favoriteDB });
export const viewAllFavoriteForProfilesUseCase = viewAllFavoriteForProfile({ favoriteDB });

