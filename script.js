// wrap in DOM
document.addEventListener("DOMContentLoaded", function() {

     // access element by id
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // add an addTask function that helps users add tasks
    function addTask() {
        const taskText = taskInput.value.trim();

         // alert user to enter a task
        if (taskText === "") {
            alert("Enter a task");
            return;
        } 
        
        // create a list item whenu user adds task
        else {
            const li = document.createElement("li");
            li.textContent = taskText;

            // create a buttton that helps user remove task
            const button = document.createElement("button");
            button.textContent = "Remove";
            button.className = "remove-btn";

            // function that helps user remove task onclick
            button.onclick = function() {
                taskList.removeChild(li);
            }

            // append remove button to list item
            li.appendChild(button);

            // append list item to task list
            taskList.appendChild(li);

            // clear the input field
            taskInput.value = "";
        }
    }

    // run addTask whenever they button is clicked
    addButton.addEventListener("click", addTask);

    // event listener that adds task once user presses the Enter key
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // invoke addTask
    addTask();

});

