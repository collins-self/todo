const addButton = document.getElementById("add-task-button");
const textField = document.querySelector<HTMLInputElement>("#task-input");
const taskList = document.getElementById("list");
const taskStyles = "font-sans max-w-md rounded-md mt-3 p-2 shadow-xl bg-slate-100 hover:line-through hover:border hover:border-red-300"
textField?.focus();

function removeTask(task: HTMLElement) {
    taskList?.removeChild(task);
}

function addTask() {
    // get input
    const input = textField?.value;
    // clear field, append task to DOM
    if (textField && input) {
        textField.value = "";
        textField.focus();
        
        // adding task div to taskList div with styles
        const task = document.createElement("div");

        task.className = taskStyles;

        const taskNode = document.createTextNode(input);
        task.appendChild(taskNode);
        taskList?.appendChild(task);

        task.addEventListener("click", () => {
            removeTask(task);
        });
    }
}

addButton?.addEventListener("click", addTask);

// "enter" key adds task
textField?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
})


