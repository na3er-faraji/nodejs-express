import { Profile } from "../../models/Profile";

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
      var profile = await Profile.find().lean();
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: profile
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
