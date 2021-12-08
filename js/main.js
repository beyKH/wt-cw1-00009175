// SITE HEADER TOGGLER WHILE MENU IS ON BURGER
//  ADDING CLASSES ANU
const elBtnSitenavToggler = document.querySelector(".js-site-header__toggler");
const elSiteHeader = document.querySelector(".site-header");

// TOGGLER OF THE HAMBURGER BUTTON
elBtnSitenavToggler.addEventListener("click", function () {
  elSiteHeader.classList.toggle("site-header--open");
});


// ADDING SKILLS TEXT
const elSkillsItem = document.querySelectorAll(".skills__text");
let counter = 0;
elSkillsItem.forEach(item =>{
  item.textContent = skills[counter];
  counter+=1;
});

const elWorkList = document.querySelector(".work__list");

// FUNCTION CREATE ELEMENT AND APPENDING ITEMS OF WORK
function creatingWorkListItems() {
  // GOING THROUGH EACH OF THE ELEMENT OF THE WORK
for( work of works){
  //ELEMENT CREATING
  li = document.createElement("li");
  a = document.createElement("a");
  workWrapper = document.createElement("div");
  p = document.createElement("p");
  workShower = document.createElement("div");
  img = document.createElement("img");
  // GIVING VALUES
  a.href = work.link;
  a.target = "_blank";
  img.src = work.img;
  p.textContent = work.text;
  // ADDING CLASS
  li.classList.add("work__item");
  workWrapper.classList.add("work__wrapper");
  workShower.classList.add("work__shower");
  img.classList.add("work__img");
  p.classList.add("work__text");

  // APPEING ELEMENT EACH OTHER
  workWrapper.appendChild(img);
  workShower.appendChild(p);
  workWrapper.appendChild(workShower);
  a.appendChild(workWrapper);
  li.appendChild(a);

  elWorkList.appendChild(li);
}
}


creatingWorkListItems();
