import simulatorDB from "../../data-access/simulator";

const addSimulatorToProfileController = () => {
  return async function post(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
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

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: simulator,
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

export default addSimulatorToProfileController;
