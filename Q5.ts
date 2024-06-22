// Question # 5
// Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.



// Answer:

const fetchData = () => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!")

            reject("Data not fetched successfully!")
        }, 1000);
    });
}


const processData = (data: string) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Data processed successfully!")
            reject("Data not processed successfully!")
        }, 1000);
    });
}


const executeSequentially = () => {
    fetchData()
       .then((fetchedData) => {
        console.log(fetchedData);
        return processData(fetchedData);
       })
       .then((processedData) => {
        console.log(processedData);
       })

       .catch((error) => {
        console.log("Error:", error);
       });
}

executeSequentially();