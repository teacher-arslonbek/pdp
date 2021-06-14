const loadBtns = document.querySelectorAll(".load_btn"); // load btn elemants
const wrappers = document.querySelectorAll(".wrapper_list_and_spinner"); // list and spinner wrap elements
const list_imgs = document.querySelectorAll(".list_img"); // list image elements
const boxs = document.querySelectorAll(".box");
let loading = false;
let currenIndex = 0;

window.addEventListener("load", () => {
  loadBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => handleClick(idx));
  });
});

const handleClick = (idx) => {
  currenIndex = idx;
  const wrapper = wrappers[idx];
  if (!loading) {
    wrapper.innerHTML = `<img src="./assets/loading.svg" alt="" />`;
    handleLoad(wrapper);
  }
};

const imgLoad = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img.src);
    img.onerror = () => reject("error");
    img.src = url;
  });
};

const handleLoad = (wrapper) => {
  const promises = [];
  for (let i = 0; i < 4; i++) {
    const id = Math.floor(Math.random() * 200);
    const imgURL = `https://picsum.photos/id/${id}/200/300`;
    promises.push(imgLoad(imgURL));
  }
  Promise.all(promises)
    .then(converImgList)
    .then((list) => {
      wrapper.removeChild(wrapper.childNodes[0]);
      wrapper.appendChild(list);
      boxs[currenIndex + 1].classList.remove("d_none");
    });
};

function converImgList(srcs) {
  const list = document.createElement("ul");
  list.classList.add("list_img");
  for (let src of srcs) {
    const listItem = document.createElement("li");
    listItem.classList.add("list_item");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    listItem.appendChild(img);
    list.appendChild(listItem);
  }
  return list;
}
