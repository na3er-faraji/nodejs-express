const viewAllFavoriteForProfile = ({ favoriteDB }) => {
  return async function viewFavoritesForProfile(info) {
    const { profileId } = info;
    const result = await favoriteDB.getFavoriteForProfile(profileId);
    return result;
  };
};

export default viewAllFavoriteForProfile;
