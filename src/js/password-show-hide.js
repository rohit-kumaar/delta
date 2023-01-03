const iconEye = document.querySelector(".icon-eye");
iconEye.addEventListener("click", (e) => {
  iconEye.classList.toggle("icon-eye-blocked");

  const password = document.querySelector("#password");
  password.getAttribute("type") == "password"
    ? password.setAttribute("type", "text")
    : password.setAttribute("type", "password");
});
