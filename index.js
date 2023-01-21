const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const toDos = JSON.parse(localStorage.getItem("toDos"));

if (toDos) {
  toDos.forEach(toDo => {
    add(toDo);
  })
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  add();
});

function add(toDo) {
  let toDoText = input.value;

  if (toDo) {
    toDoText = toDo;
  }

  if (toDoText) {
    const li = document.createElement("li");
    li.innerText = toDoText;
    li.classList.add("list-group-item")
    ul.appendChild(li);
    input.value = "";
    saveData();
  }
}

function saveData() {
  const lists = document.querySelectorAll("li");
  let toDos = [];
  lists.forEach(list => {
    toDos.push(list.innerText);
  });
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
