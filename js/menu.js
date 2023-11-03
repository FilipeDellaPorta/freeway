let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".cabecalho__menu__toggle__sidebar");
  let getSidebarUl = document.querySelector(".cabecalho__menu__toggle__sidebar ul");
  let getSidebarTitle = document.querySelector(".cabecalho__menu__toggle__sidebar");
  let getSidebarLinks = document.querySelectorAll(".cabecalho__menu__toggle__sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0.8";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }

    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
}


