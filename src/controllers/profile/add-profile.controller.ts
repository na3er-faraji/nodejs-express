import { ResponseSuccess, ResponseError } from "../../utils/response";

const addProfileController = ({ addProfileUseCase }) => {
  return async function post(httpRequest) {
    try {
      const profile = await addProfileUseCase(httpRequest.body);
      return ResponseSuccess(profile);
    } catch (e) {
      return ResponseError(e);
    }
  };
};

export default addProfileController;
