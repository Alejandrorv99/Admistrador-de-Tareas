document.addEventListener("DOMContentLoaded", function() {
    const tasks = document.querySelectorAll("li");
    let draggingTask = null;

    tasks.forEach(task => {
        task.setAttribute("draggable", "true");

        task.addEventListener("dragstart", function(e) {
            draggingTask = e.target;
        });

        task.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        task.addEventListener("drop", function(e) {
            if (draggingTask) {
                e.target.parentNode.insertBefore(draggingTask, e.target);
                draggingTask = null;
            }
        });
    });
});
