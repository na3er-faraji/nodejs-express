
import addSimulatorToProfileController from "./add-simulator-to-profile.controller";
import fetchAllSimulatorController from "./get-all-simulator.controller";
import fetchAllSimulatorForProfileController from "./get-simulator-for-profile.controller";

export const postSimulatorToProfileController = addSimulatorToProfileController();
export const getAllSimullator = fetchAllSimulatorController();
export const getAllSimulatorForProfile = fetchAllSimulatorForProfileController();
