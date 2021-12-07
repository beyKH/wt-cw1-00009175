// SITE HEADER TOGGLER WHILE MENU IS ON BURGER
//  ADDING CLASSES ANU
const elBtnSitenavToggler = document.querySelector(".js-site-header__toggler");
const elSiteHeader = document.querySelector(".site-header");
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

// WORKING SECTOIN CREATING ELEMENT
const elWorkList = document.querySelector(".work__list");

for( work of works){
  li = document.createElement("li");
  a = document.createElement("a");
  workWrapper = document.createElement("div");
  p = document.createElement("p");
  workShower = document.createElement("div");
  img = document.createElement("img");

  a.href = work.link;
  a.target = "_blank";
  img.src = work.img;
  p.textContent = work.text;

  li.classList.add("work__item");
  workWrapper.classList.add("work__wrapper");
  workShower.classList.add("work__shower");
  img.classList.add("work__img");

  p.classList.add("work__text");


  workWrapper.appendChild(img);
  workShower.appendChild(p);
  workWrapper.appendChild(workShower);
  a.appendChild(workWrapper);
  li.appendChild(a);

  elWorkList.appendChild(li);
}

