import simulatorDB from "../../data-access/simulator";
import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchAllSimulatorForProfileController = () => {
  return async function getAll(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        ...info,
        source,
      };

      const profileId = httpRequest.params.id;
      const simulators = await simulatorDB.getSimulatorForProfile(profileId);
      return ResponseSuccess(simulators);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllSimulatorForProfileController;
