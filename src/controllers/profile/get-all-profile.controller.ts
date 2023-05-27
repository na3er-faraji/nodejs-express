import profileDB from "../../data-access/profile";

const fetchAllProfileController = () => {
  return async function getAll(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source
      };
      var profiles = await profileDB.getAllProfile();
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: profiles
      };
    } catch (e) {
      console.log(e);
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
};

export default fetchAllProfileController;
