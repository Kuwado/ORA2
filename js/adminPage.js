const adminPage = contentContainer.querySelector("#admin-page");
const adminContents = adminPage.querySelectorAll(".container");
const adminMenuTop = adminPage.querySelector("#admin-menu-top");
let adminNavbarItemId = "";

const hideAllAdminContents = () => {
  adminContents.forEach((item) => {
    item.classList.add("hidden");
  });
};

const setAdminPageContent = () => {
  hideAllAdminContents();
  adminMenuTop.classList.remove("hidden");
  const itemList = adminPage.querySelector("#admin-menu-top .admin-item-list");
  itemList.innerHTML = "";

  navbarItems.forEach((item, index) => {
    if (index === 0) {
      itemList.innerHTML += ` 
        <div class="admin-item" data-value="${item.id}">
            <div class="admin-item-input">Trang chủ</div>
            <div class="admin-item-actions">
                <button class="admin-item-btn" onclick="showAdminMenuLeft(this, ${index})"><i class="fa-solid fa-eye"></i></button>
                <button class="admin-item-btn" onclick="addNavbarItem(${index})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>`;
    } else if (index !== navbarItems.length - 1) {
      itemList.innerHTML += ` 
        <div class="admin-item" data-value="${item.id}">
            <input class="admin-item-input" type="text" value="${item.textContent}" />
            <div class="admin-item-actions">
                <button class="admin-item-btn" onclick="showAdminMenuLeft(this, ${index})"><i class="fa-solid fa-eye"></i></button>
                <button class="admin-item-btn" onclick="editNavbarItem(this, ${index})"><i class="fa-solid fa-pencil"></i></button>
                <button class="admin-item-btn" onclick="deleteNavbarItem(${index})"><i class="fa-solid fa-xmark"></i></button>
                <button class="admin-item-btn" onclick="addNavbarItem(${index})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>`;
    }
  });
};

const editNavbarItem = (element, index) => {
  const item = element.closest(".admin-item");
  const input = item.querySelector(".admin-item-input");
  navbarItems[index].textContent = input.value;
  updateAdminItemList();
  item.classList.remove("edit");
};

const deleteNavbarItem = (index) => {
  navbarItems[index].remove();
  updateNavbarItems();
  setAdminPageContent();
};

const addNavbarItem = (index) => {
  const newChild = document.createElement("a");
  newChild.href = "javascript:void(0)";
  newChild.id = `navbar-item-${navbarItems.length + 1}`;
  newChild.className = "w3-bar-item w3-button navbar-item";
  newChild.textContent = "";

  navbarItems[index].insertAdjacentElement("afterend", newChild);
  updateNavbarItems();
  setAdminPageContent();
};

const showAdminMenuLeft = (element, index) => {
  hideAllAdminContents();
  adminMenuLeft.classList.remove("hidden");
  // Hiển thị title
  const adminItem = element.closest(".admin-item");
  const titleElement = adminItem.querySelector(".admin-item-input");
  const title = titleElement.value ?? titleElement.textContent;
  const titleSpan = adminMenuLeft.querySelector("#admin-title");
  titleSpan.textContent = title;
  // Hiện thị content
  adminNavbarItemId = navbarItems[index].id;
  setAdminMenuLeftContent(adminNavbarItemId);
};

setAdminPageContent();

// const showAdminMenuLeft = (element, index) => {
//   hideAllContainer();
//   const adminMenuLeft = document.querySelector("#admin-page #admin-menu-left");
//   adminMenuLeft.classList.remove("hidden");

//   // Hiển thị title
//   const adminItem = element.closest(".admin-item");
//   const title = adminItem.querySelector(".admin-item-name").textContent;

//   const titleSpan = adminMenuLeft.querySelector("#admin-title");
//   titleSpan.textContent = title;

//   // Cập nhật Sidebar
//   setSidebarItem(adminItem.getAttribute("data-value"));
//   sidebarItems = document.querySelectorAll(".w3-sidebar .w3-bar-item");
//   sidebarItems = Array.from(sidebarItems);
//   if (sidebarItems.length > 0) {
//     sidebarItems.shift();
//     updateAdminMenuLeft();
//   } else {
//     newSideBar();
//   }
// };
