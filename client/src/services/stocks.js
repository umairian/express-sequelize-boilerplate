import axios from "axios";

export const add = (body) => {
  const url = `/stocks`;
  return axios.post(url, body);
};

export const get = () => {
  const url = `/stocks`;
  return axios.get(url);
};
