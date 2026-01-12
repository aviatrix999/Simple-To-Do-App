const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }
    //const listCont=document.createElement("div");
    const li = document.createElement("li");
    li.textContent = input.value;

    const del = document.createElement("span");
    del.textContent = "❌";
    del.className = "delete";

    del.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(del);
    taskList.appendChild(li);

    input.value = "";
});
