import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://purevitallife.net/",
});

export default instance;
