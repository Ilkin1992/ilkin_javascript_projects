// Selectors
const todoInput = document.querySelector(".form-control"); 
const todoButton = document.querySelector(".btn"); 
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector("#filter_todos");



//Event listeners 
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', function(addTodo) {
    addTodo.preventDefault();
//Create DIV 
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");   
//Create LI
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo_item")
todoDiv.appendChild(newTodo);
//Add TODO to local storage
saveLocalTodos(todoInput.value);
//Create Completed Button
const completedButton = document.createElement("button");
completedButton.classList.add("completed_button");
completedButton.innerText = "+";
todoDiv.appendChild(completedButton);
//Create Remove Button
const removeButton = document.createElement("button");
removeButton.classList.add("remove_button");
removeButton.innerText = "-";
todoDiv.appendChild(removeButton);
todoList.appendChild(todoDiv);
//Clear Todo INPUT VALUE  
todoInput.value = "";
});

todoList.addEventListener('click', function(delete_check) {
const item = delete_check.target;
const todo = item.parentElement;

filterOption.addEventListener('click', filterTodo);


//Delete TODO 
if (item.classList[0] === "remove_button") {
    //Animation
    todo.classList.toggle("fall"); 
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function() {
        todo.remove();
    })
};

//CHECK MARK
if(item.classList[0] === "completed_button") {
    todo.classList.toggle("completed"); 
};
});

//Filter TODOS 

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
    switch(e.target.value) {
        case "all":
            todo.style.display = "flex";
            break;
        case "completed":
            if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            };
            break;
            case "uncompleted": 
            if (!todo.classList.contains("completed")) {
                todo.style.display = "flex";
                
            } else {
                todo.style.display = "none";
            };
            break;
    };
    });
};


function saveLocalTodos(todo) {
    //CHECK 
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
        //CHECK 
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.forEach(function(todo) {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");   
            //Create LI
            const newTodo = document.createElement("li");
            newTodo.innerText = todo;
            newTodo.classList.add("todo_item")
            todoDiv.appendChild(newTodo);
            //Create Completed Button
            const completedButton = document.createElement("button");
            completedButton.classList.add("completed_button");
            completedButton.innerText = "+";
            todoDiv.appendChild(completedButton);
            //Create Remove Button
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove_button");
            removeButton.innerText = "-";
            todoDiv.appendChild(removeButton);
            todoList.appendChild(todoDiv);
        });
};

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}