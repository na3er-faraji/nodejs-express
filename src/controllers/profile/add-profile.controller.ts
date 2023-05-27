import profileDB from "../../data-access/profile";
import { ResponseSuccess, ResponseError } from "../../utils/response";

const addProfileController = () => {
  return async function post(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
      };

      var { email, name, nickname } = info;

      let profile = await profileDB.searchProfile(email, nickname);
      if (!profile) {
        profile = await profileDB.addProfile(name, email, nickname);
      }
      return ResponseSuccess(profile);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default addProfileController;
