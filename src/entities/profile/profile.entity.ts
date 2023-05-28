var validator = require("validator");

const profileEntity = (profile) => {
  const { name, email, nickname } = profile;

  if (!name) {
    throw new Error("Profile must have name!");
  }

  if (!email) {
    throw new Error("Profile must have email!");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Profile email is not valid!");
  }

  if (!nickname) {
    throw new Error("Profile must have nickname!");
  }

  return Object.freeze({
    name,
    email,
    nickname,
  });
};

export default profileEntity;
