import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("http://localhost:3001/user/login", credentials).then(res => res.data.response)
  }
};
