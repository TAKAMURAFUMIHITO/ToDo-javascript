const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

function add() {
  let toDoText = input.value;
  if (toDoText) {
    const li = document.createElement("li");
    li.innerText = toDoText;
    li.classList.add("list-group-item")
    ul.appendChild("li");
    input.value = "";
  }
}
