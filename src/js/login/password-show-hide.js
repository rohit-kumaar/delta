import { qs } from "../querySelector.js";

const iconEye = qs(".icon-eye");

iconEye.addEventListener("click", (e) => {
  iconEye.classList.toggle("icon-eye-blocked");

  password.getAttribute("type") == "password"
    ? password.setAttribute("type", "text")
    : password.setAttribute("type", "password");
});
