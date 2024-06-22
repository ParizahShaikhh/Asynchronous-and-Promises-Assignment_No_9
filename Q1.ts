// Question # 1

// Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.



// Answer:

console.log("without setTimeout");

function fetchGreeting(callback: any) {
    setTimeout(() => {
        callback("Hello Parizah")
    }, 2000)
}

fetchGreeting((greeting: string) => {
    console.log(greeting)
})


console.log("After setTimeout");