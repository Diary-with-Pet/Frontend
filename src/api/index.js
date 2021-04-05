import axios from "axios";
import * as jwt from "jsonwebtoken";

const checkToken = async (config) => {
  let accessToken = localStorage.getItem("accessToken");
  const decode = jwt.decode(accessToken);
  const nowDate = new Date().getTime() / 1000;

  console.log(decode.exp, nowDate, decode.exp > nowDate);

  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `jwt ${localStorage.getItem("accessToken")}`,
    },
  });

  if (decode.exp > nowDate) {
    try {
      const { data } = await client.post("user/token/refresh/", {
        token: accessToken,
      });
      config.headers["Authorization"] = `jwt ${data.token}`;
    } catch (err) {
      alert("토큰발급에 실패하였습니다.");
    }
  }
  return config;
};

const getAccess = () => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `jwt ${localStorage.getItem("accessToken")}`,
    },
  });

  client.interceptors.request.use(checkToken);

  return client;
};

export { getAccess };
