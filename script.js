let items = [];
let selectedItem = null;

const container = document.getElementById("inputArea");

function finalDisplay() {
  container.innerHTML = "";

  items.forEach((item, index) => {
    const box = document.createElement("div");
    box.className = "box";
    box.onclick = () => showContent(item);
    box.innerHTML = `
        <button onclick='event.stopPropagation();removeContent(${index})' class='btn-remove'>X</button>
         
        <div class='box-container'>
            <input type='checkbox' class='check' ${item.checked ? "checked" : ""}>
            <div class='box-contain'>
            
                <h3>${item.title}</h3>
              
                <p>${item.desc}</p>

                <span>${item.time}</span>
            </div>
            

        </div>`;

    container.appendChild(box);

    const check = box.querySelector(".check");
    const title = box.querySelector("h3");
    const desc = box.querySelector("p");

    if (check.checked) {
      title.style.textDecoration = "line-through";
      desc.style.textDecoration = "line-through";
    }

    check.addEventListener("change", function () {
      item.checked = check.checked;

      if (check.checked) {
        title.style.textDecoration = "line-through";
        desc.style.textDecoration = "line-through";
      } else {
        title.style.textDecoration = "none";
        desc.style.textDecoration = "none";
      }
    });
  });
}

function removeContent(index) {
  // const deletedItem = items[index];
  // const rightContainer = document.getElementById("mainPortion");
  items.splice(index, 1);
  // if (selectedItem === deletedItem) {
  document.getElementById("mainPortion").innerHTML = "";
  //   selectedItem = null;
  // }

  finalDisplay();
}
function showContent(item) {
  const rightContainer = document.getElementById("mainPortion");
  // rightContainer.dataset.title = item.title;
  selectedItem = item;

  rightContainer.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
      `;
}

function openPop() {
  document.getElementById("popupBox").classList.add("show");
}
function cancelPop() {
  document.getElementById("popupBox").classList.remove("show");
}
function savePop() {
  const title = document.getElementById("inputContent").value;
  const desc = document.getElementById("textContent").value;
  const time = document.getElementById("time").value;

  items.push({
    title: title,
    desc: desc,
    time: time,
    checked: false,
  });
  finalDisplay();
  cancelPop();

  document.getElementById("inputContent").value = "";
  document.getElementById("textContent").value = "";
}
