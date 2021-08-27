import axios from "axios";
import successHandler from "./successHandler";
import errorHandler from "./errorHandler";
const { domain } = require("../../config");

axios.defaults.timeout = 20000;
axios.defaults.baseURL = domain;
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const delay = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

axios.interceptors.request.use(async (config) => {
  const delayInMs = 250;
  await delay(delayInMs);

  const localObject = JSON.parse(localStorage.getItem("persist:root"));
  const accessToken = JSON.parse(localObject.auth).accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

axios.interceptors.response.use(successHandler, errorHandler);
