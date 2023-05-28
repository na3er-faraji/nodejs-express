const viewAllFavorites = ({ favoriteDB }) => {
  return async function viewFavorites() {
    const result = await favoriteDB.getAllFavorite();
    return result;
  };
};

export default viewAllFavorites;
