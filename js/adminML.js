let sidebarItems = document.querySelectorAll(".w3-sidebar .w3-bar-item");
sidebarItems = Array.from(sidebarItems);

const hideAllContainer = () => {
  const containers = document.querySelectorAll("#admin-page .container");
  containers.forEach((con) => {
    con.classList.add("hidden");
  });
};

const showAdminMenuLeft = (element, index) => {
  hideAllContainer();
  const adminMenuLeft = document.querySelector("#admin-page #admin-menu-left");
  adminMenuLeft.classList.remove("hidden");

  // Hiển thị title
  const adminItem = element.closest(".admin-item");
  const title = adminItem.querySelector(".admin-item-name").textContent;

  const titleSpan = adminMenuLeft.querySelector("#admin-title");
  titleSpan.textContent = title;

  // Cập nhật Sidebar
  setSidebarItem(adminItem.getAttribute("data-value"));
  sidebarItems = document.querySelectorAll(".w3-sidebar .w3-bar-item");
  sidebarItems = Array.from(sidebarItems);
  if (sidebarItems.length > 0) {
    sidebarItems.shift();
    updateAdminMenuLeft();
  } else {
    newSideBar();
  }
};

const newSideBar = () => {
  const adminItemList = document.querySelector(
    "#admin-menu-left .admin-item-list"
  );
  adminItemList.innerHTML = "";

  adminItemList.innerHTML += ` 
    <div class="admin-item" >
        <div class="admin-item-name" onclick="showInput(this)"></div>
        <div class="admin-item-actions">

            <button class="admin-item-btn" onclick="addNavbarItem()"><i class="fa-solid fa-plus"></i></button>
        </div>
    </div>`;
};

const updateAdminMenuLeft = () => {
  const adminItemList = document.querySelector(
    "#admin-menu-left .admin-item-list"
  );
  adminItemList.innerHTML = "";

  sidebarItems.forEach((item, index) => {
    adminItemList.innerHTML += ` 
        <div class="admin-item" data-value="${item.id}">
            <div class="admin-item-name" onclick="showInput(this)">${item.textContent}</div>
            <input class="admin-item-input" type="text" value="${item.textContent}" />
            <div class="admin-item-actions">
                <button class="admin-item-btn" onclick="showAdminMenuLeft(this, ${index})"><i class="fa-solid fa-eye"></i></button>
                <button class="admin-item-btn" onclick="editNavbarItem(this, ${index})"><i class="fa-solid fa-pencil"></i></button>
                <button class="admin-item-btn" onclick="deleteNavbarItem(${index})"><i class="fa-solid fa-xmark"></i></button>
                <button class="admin-item-btn" onclick="addNavbarItem(${index})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>`;
  });
  //
};

const setPage = (id) => {
  const page = document.querySelector(`#content-container #${id}`);
  page.classList.remove("hidden");

  const content = courseInfo.find((course) => course.id === "course-info-1");
  const textContent = document.getElementById(content.contents[0].id);
  textContent.style.backgroundColor = "red";
  console.log(content.contents[0].inner);
};
