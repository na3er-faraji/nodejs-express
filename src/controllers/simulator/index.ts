
import { addSimulatorToProfileUseCase, viewAllSimulatorsUseCase, viewAllSimulatorForProfileUseCase } from "../../use-cases/simulator";
import addSimulatorToProfileController from "./add-simulator-to-profile.controller";
import fetchAllSimulatorController from "./get-all-simulator.controller";
import fetchAllSimulatorForProfileController from "./get-simulator-for-profile.controller";

export const getAllSimullatorController = fetchAllSimulatorController({ viewAllSimulatorsUseCase });
export const getAllSimulatorForProfileController = fetchAllSimulatorForProfileController({ viewAllSimulatorForProfileUseCase });
export const postSimulatorToProfileController = addSimulatorToProfileController({ addSimulatorToProfileUseCase });

