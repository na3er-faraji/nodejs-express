import simulatorDB from "../../data-access/simulator";

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
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: simulators,
      };
    } catch (e) {
      console.log(e);
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

export default fetchAllSimulatorForProfileController;
