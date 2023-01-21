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
    toDoText = toDo.text;
  }

  if (toDoText) {
    const li = document.createElement("li");
    li.innerText = toDoText;
    li.classList.add("list-group-item")

    if (toDo && toDo.completed) {
      li.classList.add("text-decoration-line-through");
    }

    li.addEventListener("contextmenu", function
      (event) {
      event.preventDefault();
      li.remove();
      saveData();
    });

    li.addEventListener("click", function () {
      li.classList.toggle("text-decoration-line-through");
      saveData();
    });

    ul.appendChild(li);
    input.value = "";
    saveData();
  }
}

function saveData() {
  const lists = document.querySelectorAll("li");
  let toDos = [];
  lists.forEach(list => {
    let toDo = {
      text: list.innerText,
      completed: list.classList.contains("text-decoration-line-through")
    };
    toDos.push(toDo);
  });
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
