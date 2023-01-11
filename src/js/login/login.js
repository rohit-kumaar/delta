import { qs } from "../querySelector.js";

const userName = qs("#userName");
const password = qs("#password");

const handleLogin = qs("#handleLogin");
handleLogin.disabled = true;

userName.addEventListener("change", (e) => {
  if (password.value === "") {
    handleLogin.disabled = true;
  } else {
    handleLogin.disabled = false;
  }
});
password.addEventListener("change", (e) => {
  if (password.value === "") {
    handleLogin.disabled = true;
  } else {
    handleLogin.disabled = false;
  }
});

handleLogin.addEventListener("click", (e) => {
  e.preventDefault();

  // handleLogin.setAttribute("data-bs-toggle", "modal");
  // handleLogin.setAttribute("data-bs-target", "#exampleModal");
  const data = new FormData();
  data.append("username", userName.value);
  data.append("password", password.value);

  for (let [username, password] of data.entries()) {
    console.log(username, password);
  }
});
