import { Favorite } from "../../models/Favorite";
import { Simulator } from "../../models/Simulator";

const fetchAllSimulatorForProfileController = () => {
  return async function getAll(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        ...info,
        source
      };

      const query = { profile_id : httpRequest.params.id };
      var simulators = await Simulator.find(query);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: simulators
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
};

export default fetchAllSimulatorForProfileController;
