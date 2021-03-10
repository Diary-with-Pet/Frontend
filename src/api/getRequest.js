import axios from "axios";

export const getAccess = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `jwt ${localStorage.getItem("accessToken")}`,
    },
  });

export const getRefresh = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `jwt ${localStorage.getItem("refreshToken")}`,
    },
  });
