export async function iapi(endpoint, data){
  console.log(`https://localhost:8000/api/v1/${endpoint}/?format=json`)
  return fetch(`http:/server:8000/api/v1/${endpoint}`, data)
}
