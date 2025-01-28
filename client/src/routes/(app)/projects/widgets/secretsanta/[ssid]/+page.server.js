import { iapi } from "$utils/api";

export async function load(event) {
  let data = {}
  try {
    const response = await iapi(`social/secret_santa/${event.params.ssid}`); // Make an API request
    data = await response.json();
  } catch (error) {
      console.error('API request failed:', error);
  }
  return data;
}