const addProfile = ({ profileDB, profileEntity }) => {
  return async function postProfile(info) {
    const result = profileEntity(info);
    const profileExists = await profileDB.searchProfile(
      result.email,
      result.nickname
    );

    if (profileExists) {
      const result = {
        msg: "Profile already exists",
        profile: profileExists,
      };
      return result;
    }

    const data = await profileDB.addProfile(
      result.name,
      result.email,
      result.nickname
    );

    return {
      msg: "Profile Added Successfully",
      data: data,
    };
  };
};

export default addProfile;
