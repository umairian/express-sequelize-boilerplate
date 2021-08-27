import axios from "axios";

export const login = (body) => {
  const url = `/admins/signin`;
  return axios.post(url, body);
};
