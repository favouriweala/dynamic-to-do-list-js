// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Enter a task");
            return;
        } 

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const button = document.createElement("button");
        button.textContent = "Remove";
        button.classList.add("remove-btn");

        // Remove task when button clicked
        button.onclick = function() {
            taskList.removeChild(li);
        }

        // Append button to li, li to list
        li.appendChild(button);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Attach event listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Invoke addTask once on DOMContentLoaded as per instructions
    addTask();

});
