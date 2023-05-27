import simulatorDB from "../../data-access/simulator";
import { ResponseSuccess, ResponseError } from "../../utils/response";

const addSimulatorToProfileController = () => {
  return async function post(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
      };

      var { profile_id } = httpRequest.params;
      var newData = {
        ...httpRequest.body,
        profile_id,
      };
      console.log(newData);
      var simulator = await simulatorDB.addSimulatorToProfile(newData);
      return ResponseSuccess(simulator);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default addSimulatorToProfileController;
