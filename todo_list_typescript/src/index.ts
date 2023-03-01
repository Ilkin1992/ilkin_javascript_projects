// Query selectors and variables
const submitTodos = document.querySelector("#submit_todos") as HTMLFormElement;
const todoInput = document.querySelector("#todo_input") as HTMLInputElement;
const todosContainer = document.querySelector(
  "#todos_container"
) as HTMLDivElement;
const template = document.querySelector("#template") as HTMLTemplateElement;
const KEY: string = "todo_item";

// Render initial todos
renderTodos();

//Function that fills array with input data on form submit and then calls another function
submitTodos.addEventListener("submit", (e) => {
  e.preventDefault();
  const todosArr: Object[] = JSON.parse(localStorage.getItem(KEY) || "[]");
  const todoObj: Object = {
    id: Math.floor(Math.random() * Date.now()),
    value: todoInput.value,
  };
  todosArr.push(todoObj);
  setLocalStorage(todosArr);
  renderTodos();
  todoInput.value = "";
});

//Add user input to local storage
function setLocalStorage(todosArr: Object[]): void {
  localStorage.setItem(KEY, JSON.stringify(todosArr));
}

//Render todos
function renderTodos(): void {
  todosContainer.innerHTML = ""; // clear the todosContainer before rendering todos
  const parsedArray: { id: number; value: string; completed: boolean }[] =
    JSON.parse(localStorage.getItem(KEY) || "[]");
  parsedArray.forEach((item: any) => {
    const templateElement: any = template.content.cloneNode(true);
    templateElement.children[0].firstElementChild.innerText = item.value;
    templateElement.children[0].setAttribute("id", item.id);
    if (item.completed) {
      templateElement.children[0].classList.add("completed");
    }
    todosContainer.appendChild(templateElement);
  });

  //Selecting delete and check buttons
  const checkButtons = document.querySelectorAll(".check_button");
  const deleteButtons = document.querySelectorAll(".delete_button");

  //Mark selected todos as completed, using corresponding ID
  checkButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const todoId: number = parseInt(
        button.parentElement?.parentElement?.id || "0"
      );
      const items = JSON.parse(localStorage.getItem(KEY) || "0");
      const updatedItems = items.map((item: any) => {
        if (item.id === todoId) {
          return { ...item, completed: true };
        }
        return item;
      });
      setLocalStorage(updatedItems);
      renderTodos();
    });
  });

  //Delete selected feedback, using corresponding ID
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const todoId: number = parseInt(
        button.parentElement?.parentElement?.id || "0"
      );
      const items = JSON.parse(localStorage.getItem(KEY) || "[]");
      const filtered = items.filter((item: any) => item.id !== todoId);
      localStorage.setItem(KEY, JSON.stringify(filtered));
      renderTodos();
    });
  });
}
