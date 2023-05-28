const favoriteData = ({ model }) => {
  async function getAllFavorite() {
    try {
      const favorite = await model.find().lean();
      return favorite;
    } catch (error) {
      console.log(error);
    }
  }

  async function getFavoriteForProfile(profileId: string) {
    try {
      const query = { profile_id: profileId };
      const favorite = await model.find(query);
      return favorite;
    } catch (error) {
      console.log(error);
    }
  }

  async function addFavorite(
    profileId: string,
    name: string,
    favorite1: string,
    favorite2: string,
    favorite3: string
  ) {
    try {
      const favorite = await model.create({
        profile_id: profileId,
        name,
        favorite1,
        favorite2,
        favorite3,
      });
      return favorite;
    } catch (error) {
      console.log(error);
    }
  }

  return Object.freeze({
    getAllFavorite,
    getFavoriteForProfile,
    addFavorite,
  });
};

export default favoriteData;
