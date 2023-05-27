
const favoriteData = ({ model }) => {
  async function getAllFavorite() {
    try {
      const favorite = await model.find().lean();
      return favorite;
    } catch (error) {
      console.log(error);
    }
  }

  async function getFavoriteById(id: string) {
    try {
      const query = { profile_id: id };
      const favorite = await model.find(query);
      return favorite;
    } catch (error) {
      console.log(error);
    }
  }

  return Object.freeze({
    getAllFavorite,
    getFavoriteById,
  });
}

export default favoriteData;

