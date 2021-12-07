// SITE HEADER TOGGLER WHILE MENU IS ON BURGER
//  ADDING CLASSES ANU
const elBtnSitenavToggler = document.querySelector(".js-site-header__toggler");
const elSiteHeader = document.querySelector(".site-header");
elBtnSitenavToggler.addEventListener("click", function () {
  elSiteHeader.classList.toggle("site-header--open");
});
