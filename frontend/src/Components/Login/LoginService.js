import axios from "axios";

function loginServiceProvider(data) {
  axios.post(`http://localhost:4000/login`, data).then((res) => {
    console.log("444444444", res);
  });
}

export default loginServiceProvider;
