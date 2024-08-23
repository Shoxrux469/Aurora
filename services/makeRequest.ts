import { ApiConstants } from "@/services/api/apiConstants";
import axios from "axios";
const makeRequest = axios.create({
  baseURL: ApiConstants.baseUrl,
});

makeRequest.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    // config.token = ""

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

makeRequest.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    console.error("error", error);
    return Promise.reject(error);
  }
);

export default makeRequest;
