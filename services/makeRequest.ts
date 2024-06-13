import axios from "axios";

const makeRequest = axios.create({
  baseURL: 'https://firestore.googleapis.com/v1/projects/bradex-74e17/databases/(default)/documents',
})

makeRequest.interceptors.request.use(async (config) => {
  // const token = ''
  config.headers['Content-Type'] = "application/json"

  return config
}, (error) => {
  return Promise.reject(error)
})

makeRequest.interceptors.response.use(
  async (response) => {
    return response
  }, (error) => {
    console.error('error', error);
    return Promise.reject(error)
  }
)

export default makeRequest;