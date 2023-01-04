import { qs } from "../querySelector.js";

const userName = qs("#userName");
const password = qs("#password");

const handleLogin = qs("#handleLogin");
handleLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("username", userName.value);
  data.append("password", password.value);

  for (let [username, password] of data.entries()) {
    console.log(username, password);
  }
});
