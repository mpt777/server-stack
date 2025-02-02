export function toJson(data) {
  let jsonData = {};
  data.forEach((value, key) => jsonData[key] = value);
  return jsonData
}
