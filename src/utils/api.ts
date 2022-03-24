import axios from "axios";

export default axios.create({
  baseURL: process.env.API_KEY,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});
