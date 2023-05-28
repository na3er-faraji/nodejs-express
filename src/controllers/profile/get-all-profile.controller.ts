import { ResponseSuccess, ResponseError } from "../../utils/response";
import logger from '../../config/winston';

const fetchAllProfileController = ({ viewAllProfilesUseCase }) => {
  return async function getAll(httpRequest) {
    try {
      var profiles = await viewAllProfilesUseCase(httpRequest.body);
      logger.info(profiles)
      return ResponseSuccess(profiles);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default fetchAllProfileController;
