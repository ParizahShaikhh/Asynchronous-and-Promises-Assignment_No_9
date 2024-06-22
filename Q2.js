"use strict";
// Question # 2
Object.defineProperty(exports, "__esModule", { value: true });
// Write a function simulateTask that simulates a task by logging "Task started",waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// Answer:
function simulateTask() {
    console.log("Task Started");
    setTimeout(function () {
        console.log("Task Completed");
    }, 1000);
}
simulateTask();
