var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");

var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.getElementById("task-name").value;
  var taskTypeInput = document.getElementById("task-type").value;
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskNameInput +
    "</h3><span class='task-type'>" +
    taskTypeInput +
    "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
