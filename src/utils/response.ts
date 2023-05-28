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
  console.log(error);
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

