const input = document.querySelector("input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const removeBtn = document.querySelector(".footer button");
let todoLst = [];

//Functions
const addTask = (e) => {
    e.preventDefault();

    const text = input.value;

    if(text !== ""){
        todoLst.push(text);
        showTasks();
        addBtn.classList.remove("active");
        input.value = "";
    }
}

function showTasks(){
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = todoLst.length;

    let newLiTag = '';
    todoLst.forEach((element, index) => {
        newLiTag += `<li>${element} <span onclick="deleteTask(${index});"><i class="fas fa-trash"></i></span></li>`
    });

    todoList.innerHTML = newLiTag;
}

function deleteTask(index){
    todoLst.splice(index, 1);
    showTasks();
}

const deleteAll = () => {
    todoLst = [];
    showTasks();
}

///ALL 

input.onkeyup = () => {
    let text = input.value;

    if(text.trim() !== 0){
        addBtn.classList.add("active");
    }else {
        addBtn.classList.remove("active");
    }
}

addBtn.addEventListener("click", addTask);
removeBtn.addEventListener("click", deleteAll);