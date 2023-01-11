import { qs } from "../querySelector.js";

const userName = qs("#userName");
const password = qs("#password");
const checkbox = qs("#checkbox");

const handleLogin = qs("#handleLogin");
handleLogin.disabled = true;

checkbox.addEventListener("change", function (e) {
  if (checkbox.checked && userName.value !== "" && password.value !== "") {
    handleLogin.disabled = false;
  } else {
    handleLogin.disabled = true;
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
