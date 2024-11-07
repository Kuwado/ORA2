let navbarItems = document.querySelectorAll(".w3-bar .w3-bar-item");
navbarItems = Array.from(navbarItems);
navbarItems.shift();
navbarItems.pop();

const updateNavbarItems = () => {
  navbarItems = document.querySelectorAll(".w3-bar .w3-bar-item");
  navbarItems = Array.from(navbarItems);
  navbarItems.shift();
  navbarItems.pop();
};

const updateAdminItemList = () => {
  const adminItemList = document.querySelector("#admin .admin-item-list");
  adminItemList.innerHTML = "";
  updateNavbarItems();

  navbarItems.forEach((item, index) => {
    if (index === 0) {
      adminItemList.innerHTML += ` 
        <div class="admin-item" data-value="${item.id}">
            <div class="admin-item-name">Trang chủ</div>
            <div class="admin-item-actions">
                <button class="admin-item-btn" onclick="showAdminMenuLeft(this, ${index})"><i class="fa-solid fa-eye"></i></button>
                <button class="admin-item-btn" onclick="addNavbarItem(${index})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>`;
    } else {
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
    }
  });
};

const showInput = (element) => {
  const item = element.closest(".admin-item");
  item.classList.add("edit");
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
  updateAdminItemList();
};

const addNavbarItem = (index) => {
  const newChild = document.createElement("a");
  newChild.href = "javascript:void(0)";
  newChild.className = "w3-bar-item w3-button";
  newChild.textContent = "";

  navbarItems[index].insertAdjacentElement("afterend", newChild);
  // navbarItems[index].parentNode.insertBefore(newChild, navbarItems[index]);
  updateAdminItemList();
};

//<a href="javascript:void(0)" onclick="showContent('admin-page')" class="w3-bar-item w3-button">Admin page</a>

// start
updateAdminItemList();
