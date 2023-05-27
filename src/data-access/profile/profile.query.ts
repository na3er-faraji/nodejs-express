
const profileData = ({ model }) => {
  async function getAllProfile() {
    try {
      const profile = await model.find().lean();
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

  async function addProfile(name: string, email: string, nickname: string) {
    try {
      const profile = await model.create({ name, email, nickname });
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

  return Object.freeze({
    getAllProfile,
    searchProfile,
    addProfile,
  });
}

export default profileData;

