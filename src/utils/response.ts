import logger from '../config/winston';

export function ResponseSuccess(data) {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    statusCode: 200,
    body: data,
  };
}

export function ResponseError(error) {
  logger.error(error);
  return {
    headers: {
      "Content-Type": "application/json",
    },
    statusCode: 400,
    body: {
      error: error.message || error,
    },
  };
}
