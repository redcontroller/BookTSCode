// interface NewType<T> {
interface NewType<T extends string | number> {
    id: number,
    contents: T
}

const sample1: NewType<string> = {
    id: 1,
    contents: 'TypeScript'
};

const sample2: NewType<number> = {
    id: 2,
    contents: 100
};

// const sample3: NewType<boolean> = { // Error! type 'boolean'
//     id: 3,
//     contents: false
// };

// const sample4: NewType<boolean[]> = { // Error! type 'boolean[]'
//     id: 4,
//     contents: [true, false, true]
// };

// console.log(sample1, sample2, sample3, sample4);

type U = string | number | boolean;

// Constraints
type MyType<T extends U> = undefined | T;

const word: MyType<string> = "TypeScript";
console.log(word); // "TypeScript"

interface Animal {
    name: string;
    age: number;
}

// Constraints
interface Dog<T extends U> extends Animal {
    breed: T;
}

const myDog: Dog<string> = {
    name: "Luna",
    age: 1,
    breed: "Maltese"
};
console.log(myDog);