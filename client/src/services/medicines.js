import axios from "axios";

export const add = (body) => {
  const url = `/medicines`;
  return axios.post(url, body);
};

export const get = () => {
  const url = `/medicines`;
  return axios.get(url);
};
