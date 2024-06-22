"use strict";
// Question # 1
Object.defineProperty(exports, "__esModule", { value: true });
// Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.
// Answer:
console.log("without setTimeout");
function fetchGreeting(callback) {
    setTimeout(() => {
        callback("Hello Parizah");
    }, 2000);
}
fetchGreeting((greeting) => {
    console.log(greeting);
});
console.log("After setTimeout");
