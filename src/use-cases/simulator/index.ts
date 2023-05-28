import simulatorDB from "../../data-access/simulator";
import simulatorEntity from "../../entities/simulator";
import addSimulatorToProfile from "./add-simulator-to-profile.usecase";
import viewAllSimulators from "./view-all-simulator.usecase";
import viewAllSimulatorForProfile from "./view-simulator-for-profile.usecase";

export const addSimulatorToProfileUseCase = addSimulatorToProfile({ simulatorDB, simulatorEntity });
export const viewAllSimulatorsUseCase = viewAllSimulators({ simulatorDB });
export const viewAllSimulatorForProfileUseCase = viewAllSimulatorForProfile({ simulatorDB });

