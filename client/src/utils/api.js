export async function iapi(endpoint, data){
  return fetch(`http://server:8000/api/v1/${endpoint}`, data)
}


export async function papi(fetch, endpoint, data) {
  return fetch(`http://server:8000/api/v1/${endpoint}`, data)
}