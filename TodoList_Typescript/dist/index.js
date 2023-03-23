"use strict";
// Query selectors and variables
const submitTodos = document.querySelector("#submit_todos");
const todoInput = document.querySelector("#todo_input");
const todosContainer = document.querySelector("#todos_container");
const template = document.querySelector("#template");
const KEY = "todo_item";
// Render initial todos
renderTodos();
//Function that fills array with input data on form submit and then calls another function
submitTodos.addEventListener("submit", (e) => {
    e.preventDefault();
    const todosArr = JSON.parse(localStorage.getItem(KEY) || "[]");
    const todoObj = {
        id: Math.floor(Math.random() * Date.now()),
        value: todoInput.value,
    };
    todosArr.push(todoObj);
    setLocalStorage(todosArr);
    renderTodos();
    todoInput.value = "";
});
//Add user input to local storage
function setLocalStorage(todosArr) {
    localStorage.setItem(KEY, JSON.stringify(todosArr));
}
//Render todos
function renderTodos() {
    todosContainer.innerHTML = ""; // clear the todosContainer before rendering todos
    const parsedArray = JSON.parse(localStorage.getItem(KEY) || "[]");
    parsedArray.forEach((item) => {
        const templateElement = template.content.cloneNode(true);
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
            var _a, _b;
            const todoId = parseInt(((_b = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id) || "0");
            const items = JSON.parse(localStorage.getItem(KEY) || "0");
            const updatedItems = items.map((item) => {
                if (item.id === todoId) {
                    return Object.assign(Object.assign({}, item), { completed: true });
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
            var _a, _b;
            const todoId = parseInt(((_b = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.id) || "0");
            const items = JSON.parse(localStorage.getItem(KEY) || "[]");
            const filtered = items.filter((item) => item.id !== todoId);
            localStorage.setItem(KEY, JSON.stringify(filtered));
            renderTodos();
        });
    });
}
