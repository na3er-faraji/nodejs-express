import simulatorDB from "../../data-access/simulator";

const fetchAllSimulatorController = () => {
  return async function getAll(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source
      };
      
      var simulator = await simulatorDB.getAllSimulator();
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: simulator
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

export default fetchAllSimulatorController;
