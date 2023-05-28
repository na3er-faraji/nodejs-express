import { ResponseSuccess, ResponseError } from "../../utils/response";

const addSimulatorToProfileController = ({ addSimulatorToProfileUseCase }) => {
  return async function post(httpRequest) {
    try {
      var { profileId } = httpRequest.params;
      var newData = {
        ...httpRequest.body,
        profileId,
      };
      const simulator = await addSimulatorToProfileUseCase(newData);
      return ResponseSuccess(simulator);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default addSimulatorToProfileController;
