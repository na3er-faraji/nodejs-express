import { ResponseSuccess, ResponseError } from "../../utils/response";

const fetchAllProfileController = ({viewAllProfilesUseCase}) => {
  return async function getAll(httpRequest) {
    try {
      var profiles = await viewAllProfilesUseCase(httpRequest.body);
      return ResponseSuccess(profiles);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllProfileController;
