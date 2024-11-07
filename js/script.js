// Navbar
const navbar = document.getElementById("navbar");
let currentNavbarItem = navbar.querySelector(".navbar-item");
let navbarItems = navbar.querySelectorAll(".navbar-item");
navbarItems = Array.from(navbarItems);
// Sidebar
const sidebar = document.getElementById("mySidebar");
const overlay = document.getElementById("myOverlay");
let sidebarItems = sidebar.querySelectorAll(".sidebar-item");
sidebarItems = Array.from(sidebarItems);
// Content
const contentContainer = document.getElementById("content-container");
let contents = document.querySelectorAll("#content-container .w3-container");

// Mở sidebar
const w3_open = () => {
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
    overlay.style.display = "none";
  } else {
    sidebar.style.display = "block";
    overlay.style.display = "block";
  }
};

// Đóng sidebar
const w3_close = () => {
  sidebar.style.display = "none";
  overlay.style.display = "none";
};

const renderNavbar = () => {
  const itemList = navbar.querySelector(".item-list");
  itemList.innerHTML = "";
  contents.forEach((item, index) => {
    itemList.innerHTML += `
        <a
          href="javascript:void(0)"
          onclick="changePage('${item.id}')"
          id="course-info"
          class="w3-bar-item w3-button navbar-item"
        >
          ${
            index === 0 ? `<i class="fas fa-home">` : item.getAttribute("title")
          }</i>
        </a>`;
  });
};

const renderSidebar = (contentId) => {
  const content = contentContainer.querySelector(`#${contentId}`);
  const allItems = content.querySelectorAll(".content");
  const itemList = sidebar.querySelector(".item-list");
  itemList.innerHTML = "";
  itemList.innerHTML += `<h4 class="w3-bar-item"><b>${content.getAttribute(
    "title"
  )}</b></h4>`;
  allItems.forEach((item) => {
    if (item.id !== "admin-page") {
      const title = item.querySelector(".section-header").textContent;
      itemList.innerHTML += `<a class="w3-bar-item w3-button w3-hover-black sidebar-item" href="#${item.id}">${title}</a>`;
    }
  });
};

const createSidebarItems = (list, title) => {
  sidebar.innerHTML += `<h4 class="w3-bar-item"><b>${title}</b></h4>`;
  if (list.length > 0)
    list.map((item) => {
      console.log(item);
      sidebar.innerHTML += `<a class="w3-bar-item w3-button w3-hover-black sidebar-item" href="#${item.id}">${item.title}</a>`;
    });
};

const setSidebar = (id) => {
  console.log(id);
  sidebar.innerHTML = "";
  let sidebarList = [];
  const title = navbar.querySelector(`#${id}`).textContent;
  switch (id) {
    case "course-info":
      sidebarList = courseInfoData;
      break;
    case "info":
      sidebarList = infoData;
      break;
    case "web-tech":
      sidebarList = webTechData;
      break;
    case "profile":
      sidebarList = profileData;
      break;
  }
  createSidebarItems(sidebarList, title);
};

const setNavbar = () => {
  navbarItems.forEach((item) => {
    item.classList.remove("active");
  });
  console.log(currentNavbarItem);
  currentNavbarItem.classList.add("active");
};

const setContent = () => {
  contents.forEach((item) => {
    item.classList.add("hidden");
  });
  const currentSection = contentContainer.querySelector(
    `#${currentNavbarItem.id}`
  );
  currentSection.classList.remove("hidden");
};

const showContentPage = (id) => {
  // setNavbar();
  // setContent();
  // setSidebar(currentNavbarItem.id);
  renderNavbar();
  renderSidebar(id);
};

const changePage = (id) => {
  currentNavbarItem = navbar.querySelector(`#${id}`);
  showContentPage(id);
};

showContentPage("course-info");
// changePage("admin-page");

const updateNavbarItems = () => {
  navbarItems = navbar.querySelectorAll(".navbar-item");
  navbarItems = Array.from(navbarItems);
};

const updateSidebaItems = () => {
  sidebarItems = sidebar.querySelectorAll(".sidebar-item");
  sidebarItems = Array.from(sidebarItems);
};
