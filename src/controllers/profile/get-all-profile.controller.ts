import profileDB from "../../data-access/profile";
import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchAllProfileController = () => {
  return async function getAll(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
      };
      var profiles = await profileDB.getAllProfile();
      return ResponseSuccess(profiles);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllProfileController;
