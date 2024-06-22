// Question # 3

// Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.



// Answer:

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!")
            
            reject("Data not fetched successfully!")
        }, 1000);
    });
}


fetchData()
.then((data) => {
    console.log(data);
})

.catch((error) => {
    console.log(error);
});