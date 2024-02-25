"use strict";
let promise = new Promise((resolve, reject) => {
    resolve(100);
    reject("Error occurred!!");
});
const emptyPromise = new Promise(() => { }); // Promise<unknown>
const basicPromise = new Promise((resolve) => resolve(200)); // Promise<unknown>
const resolvedPromise = Promise.resolve(); // Promise<void>
const resolvedNumberPromiseResolve = Promise.resolve(100); // Promise<number>
const rejectedPromise = Promise.reject('Error'); // Promise<never>
// 타입 정의 방법 (1)
const numPromise = new Promise(() => { }); // Promise<number>
// 타입 정의 방법 (2)
const stringPromise = new Promise(() => { }); // Promise<string>
const simplePromise = new Promise((resolve, reject) => {
    resolve(200); // (parameter) resolve: (value: number | PromiseLike<number>) => void
    reject('Error 404'); // (parameter) reject: (resean?: any) => void
});
simplePromise.then((result) => console.log(result)); // 200
let typedPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(100), 1000);
    reject("Error occurred!!");
});
typedPromise.then((result) => {
    if (typeof result === "number") {
        console.log(result); // resolve 함수 동작은 무시됩니다.
    }
}, (error) => {
    if (typeof error === "string") { // Type Narrowing
        console.log(error); // error
    }
});
typedPromise.catch((error) => {
    if (typeof error === "string") { // Type Narrowing
        console.log(error); // error
    }
});
function fetchInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Kim",
                age: 32
            });
        }, 1000);
    });
}
fetchInfo().then((response) => {
    // The type of response is Info
    console.log(response); // { "name": "Kim", "age" : 32}
});
// function fetchInfo(): Promise<Info> {
//     return new Promise((resolve, reject) => { // Info type
//         ...
//     });
// }
