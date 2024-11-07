const adminMenuLeft = adminPage.querySelector("#admin-menu-left");

const setAdminMenuLeftContent = (id) => {
  setSidebar(id);

  const itemList = adminPage.querySelector("#admin-menu-left .admin-item-list");
  itemList.innerHTML = "";
  updateSidebaItems();
  if (sidebarItems.length === 0) {
    itemList.innerHTML += ` 
    <div class="admin-item">
        <div class="admin-item-actions">
            <button class="admin-item-btn" onclick="addSidebarItem(0)"><i class="fa-solid fa-plus"></i></button>
        </div>
    </div>`;
  } else {
    sidebarItems.forEach((item, index) => {
      itemList.innerHTML += ` 
          <div class="admin-item" data-value="${item.id}">
              <input class="admin-item-input" type="text" value="${item.textContent}" />
              <div class="admin-item-actions">
                  <button class="admin-item-btn" onclick="showAdminMenuLeft(this, ${index})"><i class="fa-solid fa-eye"></i></button>
                  <button class="admin-item-btn" onclick="editSidebarItem(this, ${index})"><i class="fa-solid fa-pencil"></i></button>
                  <button class="admin-item-btn" onclick="deleteSidebarItem(${index})"><i class="fa-solid fa-xmark"></i></button>
                  <button class="admin-item-btn" onclick="addSidebarItem(${index})"><i class="fa-solid fa-plus"></i></button>
              </div>
          </div>`;
    });
  }
};

const editSidebarItem = (element, index) => {};

const deleteSidebarItem = (index) => {};

const addSidebarItem = (index) => {};
