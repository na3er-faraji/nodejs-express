import fetchAllProfileController from "./get-all-profile.controller";
import addProfileController from "./add-profile.controller";
import {
  addProfileUseCase,
  viewAllProfilesUseCase,
} from "../../use-cases/profile/index";

export const getAllProfileController = fetchAllProfileController({
  viewAllProfilesUseCase,
});
export const postProfileController = addProfileController({
  addProfileUseCase,
});
