import simulatorDB from "../../data-access/simulator";
import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchAllSimulatorController = () => {
  return async function getAll(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source
      };
      
      var simulator = await simulatorDB.getAllSimulator();
      return ResponseSuccess(simulator);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllSimulatorController;
