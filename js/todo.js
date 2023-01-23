const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JavaScript object나 array나 어떤 것이든 string으로 바꿔주는 기능. 배열처럼 보이게 하고 중복도 가능하다.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id는 문자열이므로 toDo.id와 같은 숫자열로 변경시켜야한다.
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.id = "span"
  const button = document.createElement("button");
  button.innerText = "✔️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //쪼개져있는 string을 살아있는 JavaScript Object으로 만드는 것(위 경우에서는 array로)
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // Arrow function
}

// 지우고 싶은 item을 제외하는 거 = item을 지우는 거다.
//[].filter()의 역할 = 지정된 함수를 호출해서 []번만큼 돌린다. 지정된 함수는 반드시 true를 리턴해야 함
// 조건을 적을 때 ex) function sexyfilter(item){return item !== 3}, item은 그냥 변수 이름이므로 다양하게 변형 가능
