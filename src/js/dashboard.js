document.addEventListener("DOMContentLoaded", function () {
  // Main page display by clicking sidebar navigation start
  function showPage(page) {
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";
  }

  document.querySelectorAll("aside ul li").forEach((li) => {
    li.addEventListener("click", function () {
      showPage(this.dataset.page);
    });
  });
  // Main page display by clicking sidebar navigation end

  // Notifiaction bell start
  const notificationBell = document.getElementById("notificationBell");
  const notification = document.getElementById("notification");
  const main = document.getElementById("main");
  const sections = main.querySelectorAll("section");
  notificationBell.addEventListener("click", () => {
    notification.classList.toggle("active");
    for (const section of sections) {
      section.classList.toggle("active");
    }
    notificationBellBtnChange();
  });

  function notificationBellBtnChange() {
    if (notification.classList.contains("active")) {
      notificationBell.classList.replace("bx-bell", "bx-x");
    } else {
      notificationBell.classList.replace("bx-x", "bx-bell");
    }
  }
  // Notifiaction bell end

  // Aside bar start
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("btn");
  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    menuBtnChange();
  });
  function menuBtnChange() {
    if (sidebar.classList.contains("close")) {
      closeBtn.classList.replace("bx-chevron-left", "bx-chevron-right");
    } else {
      closeBtn.classList.replace("bx-chevron-right", "bx-chevron-left");
    }
  }
  // Aside bar end

  const settings = document.getElementById("settings");
  const logout = document.getElementById("logout");
  logout.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  const dashboardRightAddAssessments = document.querySelectorAll(
    ".dashboard-right__add-assessment"
  );
  for (const dashboardRightAddAssessment of dashboardRightAddAssessments) {
    dashboardRightAddAssessment.addEventListener("click", () => {
      const addAssessment = document.querySelector(".add-assessment");
      addAssessment.style.display = "block";
      addAssessment.style.zIndex = "10";
    });
  }

  const closeAddAssessment = document.getElementById("closeAddAssessment");
  closeAddAssessment.addEventListener("click", () => {
    document.querySelector(".add-assessment").style.display = "none";
  });

  // Dark mode start
  const body = document.querySelector("body");
  const dashboardDarkModeBtn = document.querySelectorAll(".dashboard-darkmode");
  const dashboardDarkmodeTexts = document.querySelectorAll(
    ".dashboard-darkmode__text"
  );
  for (const dashboardDarkMode of dashboardDarkModeBtn) {
    dashboardDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("darkmode");

      for (const dashboardDarkmodeText of dashboardDarkmodeTexts) {
        if (body.classList == "darkmode") {
          dashboardDarkmodeText.innerText = "Light";
          dashboardDarkmodeText.style.color = "white";
        } else if (body.classList == "") {
          dashboardDarkmodeText.innerText = "Dark";
          dashboardDarkmodeText.style.color = "black";
        }
      }
    });
    // Dark mode end

    // Assessment Master Check button start

    // const inputTypeCheckboxs = document.querySelectorAll(
    //   "input[type=checkbox]"
    // );

    // for (const inputTypeCheckbox of inputTypeCheckboxs) {
    //   inputTypeCheckbox.addEventListener("click", () => {
    //     console.log("H");
    //   });
    // }

    // Assessment Master Check button end
  }
});

function show(anything) {
  document.querySelector(".textBox").value = anything;
}

const dropdown = document.querySelector(".add-assessment-form__dropdown");
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
