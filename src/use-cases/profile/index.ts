import profileDB from "../../data-access/profile/index";
import profileEntity from "../../entities/profile/index";
import viewAllProfiles from "./view-all-profile.usecase";
import addProfile from "./add-profile.usecase";

export const addProfileUseCase = addProfile({ profileDB, profileEntity });
export const viewAllProfilesUseCase = viewAllProfiles({ profileDB });
