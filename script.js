// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage (or use empty array if none exist)
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to create a task element in the DOM
    function renderTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const button = document.createElement("button");
        button.textContent = "Remove";
        button.classList.add("remove-btn");

        // Remove task when button clicked
        button.onclick = function() {
            taskList.removeChild(li);

            // Update tasks array and localStorage
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        }

        li.appendChild(button);
        taskList.appendChild(li);
    }

    // Function to add a task (from input field)
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Enter a task");
            return;
        } 

        // Add to array and save
        tasks.push(taskText);
        saveTasks();

        // Render on page
        renderTask(taskText);

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

    // Load saved tasks when page loads
    tasks.forEach(task => renderTask(task));

});
