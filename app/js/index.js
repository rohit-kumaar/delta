document.addEventListener("DOMContentLoaded", function () {
  const text = document.getElementById("text");
  const password = document.getElementById("password");
  text.addEventListener("mouseenter", (params) => {
    style(text);
  });
  password.addEventListener("mouseenter", (params) => {
    style(password);
  });
});

function style(textarea) {
  let textValue = textarea.value.trim();
  if (textValue.length >= 1) {
    textarea.style.color = "white";
    textarea.style.fontWeight = 700;
  } else {
    textarea.style.color = "white";
    textarea.style.fontWeight = 400;
  }
}

