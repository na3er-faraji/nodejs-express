
const profileData = ({ model }) => {
  async function getAllProfile() {
    try {
      const profile = await model.find().lean();
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

  async function getProfileById(id: string) {
    try {
      const query = { _id: id };
      const profile = await model.findOne(query);
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

  async function searchProfile(email: string, nickname: string) {
    try {
      let profile = await model.findOne({
        $or: [{ email }, { nickname }],
      }).exec();
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

  // async function addProfile(name: string, email: string, nickname: string) {
  //   try {
  //     const profile = await model.create({ name, email, nickname });
  //     return profile;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function addProfile(name: string, email: string, nickname: string, capital?: string, divisa?: string,
                             prefered_cryptocurrency?: string) {
    try {
      const profile = await model.create({ name, email, nickname, capital, divisa, prefered_cryptocurrency });
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

  return Object.freeze({
    getAllProfile,
    getProfileById,
    searchProfile,
    addProfile,
  });
}

export default profileData;

