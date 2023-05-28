import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchAllSimulatorForProfileController = ({
  viewAllSimulatorForProfileUseCase,
}) => {
  return async function getAll(httpRequest) {
    try {
      const simulators = await viewAllSimulatorForProfileUseCase(
        httpRequest.params
      );
      return ResponseSuccess(simulators);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllSimulatorForProfileController;
