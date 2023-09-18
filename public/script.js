const textBox = document.getElementById("text-box");
const button = document.getElementById("button");
const listItem = document.getElementById("list-item");

button.onclick = function () {
  // ADD TASK
  if (textBox.value === "") {
    alert("enter your task");
  } else {
    let li = document.createElement("LI");
    li.innerHTML = textBox.value;
    listItem.append(li);
    saveData();

    // ADD DELETE BUTTON
    let span = document.createElement("SPAN");
    span.innerHTML = "\u00d7";
    li.append(span);
    saveData();
  }
  textBox.value = "";
};

listItem.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  } else {
    e.target.classList.toggle("checked");
  }
  saveData();
});

function saveData() {
  localStorage.setItem("myTodo", listItem.innerHTML);
}
function getData() {
  listItem.innerHTML = localStorage.getItem("myTodo");
}
getData();
