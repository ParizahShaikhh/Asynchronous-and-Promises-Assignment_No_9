"use strict";
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
let fetchWithError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data not fetched successfully!");
            }
        }, 1000);
    });
};
fetchWithError().then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
