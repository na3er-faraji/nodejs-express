import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchAllSimulatorController = ({ viewAllSimulatorsUseCase }) => {
  return async function getAll(httpRequest) {
    try {
      const simulator = await viewAllSimulatorsUseCase();
      return ResponseSuccess(simulator);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllSimulatorController;
