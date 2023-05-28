export function isDate(date) {
  let isValidDate = Date.parse(date);

  if (isNaN(isValidDate)) {
    return false;
  }

  return true;
}
