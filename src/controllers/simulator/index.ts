
import addSimulatorToProfileController from "./add-simulator-to-profile.controller";
import fetchAllSimulatorController from "./get-all-simulator.controller";
import fetchAllSimulatorForProfileController from "./get-simulator-for-profile.controller";

export const getAllSimullatorController = fetchAllSimulatorController();
export const getAllSimulatorForProfileController = fetchAllSimulatorForProfileController();
export const postSimulatorToProfileController = addSimulatorToProfileController();

