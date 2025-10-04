// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // function to load tasks from Local Storage when page loads
    function loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            const tasksArray = JSON.parse(savedTasks);
            tasksArray.forEach(function(taskText) {
                createTaskElement(taskText);
            });
        }
    }

    // function to save tasks to Local Storage whenever tasks are added or removed
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(function(li) {
            // get only the text of the task without the "Remove" button
            const text = li.firstChild.textContent;
            tasks.push(text);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // helper function to create a task element
    function createTaskElement(taskText) {
        // create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // create remove button
        const button = document.createElement("button");
        button.textContent = "Remove";
        button.classList.add("remove-btn");

        // function that removes task when button is clicked
        button.onclick = function() {
            taskList.removeChild(li);
            saveTasks(); // update Local Storage after removing
        }

        // append remove button to list item
        li.appendChild(button);

        // append list item to task list
        taskList.appendChild(li);
    }

    // function that adds task
    function addTask() {
        const taskText = taskInput.value.trim();

        // alert user to enter a task if input is empty
        if (taskText === "") {
            alert("Enter a task");
            return;
        } 

        // create task element
        createTaskElement(taskText);

        // save tasks to Local Storage after adding
        saveTasks();

        // clear input field
        taskInput.value = "";
    }

    // run addTask whenever the button is clicked
    addButton.addEventListener("click", addTask);

    // event listener that adds task once user presses the Enter key
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // load tasks from Local Storage when DOM loads
    loadTasks();
});
