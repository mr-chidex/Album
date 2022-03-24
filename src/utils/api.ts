import axios from "axios";

export default axios.create({
  baseURL: "https://dex-photos.herokuapp.com/api/v1",
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});
