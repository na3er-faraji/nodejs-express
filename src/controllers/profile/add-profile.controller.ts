import profileDB from "../../data-access/profile";

const addProfileController = () => {
  return async function post(httpRequest) {
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

      var { email, name, nickname } = info;

      let profile =  await profileDB.searchProfile(email, nickname);
      if (!profile) {
        profile = await profileDB.addProfile(name, email, nickname);
      }

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

export default addProfileController;
