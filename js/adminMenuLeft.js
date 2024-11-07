const adminMenuLeft = adminPage.querySelector("#admin-menu-left");

const renderAdminMenuLeft = (contentId) => {
  renderSidebar(contentId);
  hideAllAdminContents();
  adminMenuLeft.classList.remove("hidden");
  // Lấy content
  const content = contentContainer.querySelector(`#${contentId}`);
  const items = content.querySelectorAll(".content");
  // Hiển thị title trang
  const titleSpan = adminMenuLeft.querySelector("#admin-title");
  titleSpan.textContent = content.getAttribute("title");
  // Hiển thị nội dung trang
  const itemList = adminMenuLeft.querySelector(".admin-item-list");
  itemList.innerHTML = "";

  if (items.length === 0) {
    itemList.innerHTML += ` 
    <div class="admin-item">
        <div class="admin-item-actions">
            <button class="admin-item-btn" onclick="addSidebarItem(0)"><i class="fa-solid fa-plus"></i></button>
        </div>
    </div>`;
  } else {
    items.forEach((item) => {
      const title = item.querySelector(".section-header").textContent.trim();
      const childrenId = item.id;
      itemList.innerHTML += ` 
          <div class="admin-item" data-value="${childrenId}">
              <input class="admin-item-input" type="text" value="${title}" />
              <div class="admin-item-actions">
                  <button class="admin-item-btn" onclick="showAdminMenuLeft(this, '${childrenId}', '${contentId}')"><i class="fa-solid fa-eye"></i></button>
                  <button class="admin-item-btn" onclick="editSidebarItem(this, '${childrenId}', '${contentId}')"><i class="fa-solid fa-pencil"></i></button>
                  <button class="admin-item-btn" onclick="deleteSidebarItem('${childrenId}', '${contentId}')"><i class="fa-solid fa-xmark"></i></button>
                  <button class="admin-item-btn" onclick="addSidebarItem('${childrenId}', '${contentId}')"><i class="fa-solid fa-plus"></i></button>
              </div>
          </div>`;
    });
  }
};

const editSidebarItem = (element, childrenId, contentId) => {
  const currentChild = contentContainer.querySelector(`#${childrenId}`);
  const title = currentChild.querySelector(".section-header");
  const item = element.closest(".admin-item");
  const input = item.querySelector(".admin-item-input");
  title.textContent = input.value;
  renderAdminMenuLeft(contentId);
};

const deleteSidebarItem = (childrenId, contentId) => {
  const currentChild = contentContainer.querySelector(`#${childrenId}`);
  const title = currentChild.querySelector(".section-header");
  const confirm = window.confirm(
    `Bạn có chắc muốn xóa '${title.textContent.trim()}' không?`
  );
  if (confirm) {
    currentChild.remove();
    renderAdminMenuLeft(contentId);
  }
};

const addSidebarItem = (childrenId, contentId) => {};
