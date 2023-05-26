
import fetchAllProfileController from "./get-all-profile.controller";
import addProfileController from "./add-profile.controller";

export const getAllProfileController = fetchAllProfileController();
export const postProfileController = addProfileController();

// module.exports = Object.freeze({
//   getAllProfileController,
//   postProfileController,
// });
