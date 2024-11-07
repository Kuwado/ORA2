const adminLayoutContent = adminPage.querySelector("#admin-layout-content");
const previewContent = adminLayoutContent.querySelector(".preview-layout");

const renderPreviewContent = () => {
  const numberItems = 128;
  for (i = 0; i < numberItems; i++) {
    previewContent.innerHTML += '<div class="layout-item"></div>';
  }
};

const renderAdminLayoutContent = (contentId, childrenId, layoutId) => {
  previewContent.innerHTML = "";
  hideAllAdminContents();
  adminLayoutContent.classList.remove("hidden");
  // Lấy content
  const content = contentContainer.querySelector(`#${contentId}`);
  const contentTitle = content.getAttribute("title");
  const currentChild = content.querySelector(`#${childrenId}`);
  const childTitle = currentChild.querySelector(".section-header").textContent;
  const layout = currentChild.querySelector(`#${layoutId}`);
  const layoutTitle = layout.getAttribute("title");
  const layoutContent = layout.innerHTML;
  //   const layouts = currentChild.querySelectorAll(".layout");
  // Hiển thị title trang
  const titleSpan = adminLayoutContent.querySelector("#admin-title");
  titleSpan.textContent = `${contentTitle} / ${childTitle} / ${layoutTitle}`;
  const previewTitle = adminLayoutContent.querySelector(".section-header");
  previewTitle.textContent = `Preiview ${layoutTitle}`;
  // Hiển thị nội dung trang
  const itemList = adminLayoutContent.querySelector(".admin-item-list");
  itemList.innerHTML = "";
  itemList.innerHTML += layoutContent;
};
