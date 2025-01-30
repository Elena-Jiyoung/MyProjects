document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const orderedLst = document.getElementById("orderedLst");

    if (!addTaskButton) {
        console.error("Button not found!");
        return;
    }
    // Add event listener to button
    addTaskButton.addEventListener("click", function () {
    
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    let lstItem = document.createElement("li");
    lstItem.textContent =taskText
    
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    
    checkBox.addEventListener("change", function () {
        lstItem.style.textDecoration = checkBox.checked ? "line-through" : "none";
    });

    
    lstItem.appendChild(checkBox);
    orderedLst.appendChild(lstItem);

    
    taskInput.value = "";
    
});
});
