import axios from "axios";

const getRequest = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default getRequest;
