"use strict";
// const person1: Person = { // Error: Property 'age' is missing
//     name: 'A'
// };
const person2 = {
    name: 'B'
};
const person3 = {
    name: 'A'
};
// Make all properties in T readonly
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };
// From T, pick a set of properties whose keys are in the union K
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
// Construct a type with a set of properties K of type T
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
// Exclude from T those types that are assignable to U
// type Exclude<T, U> = T extends U ? never : T;
// Extract from T those types that are assignable to U
// type Extract<T, U> = T extends U ? T : never;
// Construct a type with the properties of T except for those in type K.
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// Exclude null and undefined from T
// type NonNullable<T> = T extends null | undefined ? never : T;
// Obtain the parameters of a function type in a tuple
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
// Obtain the parameters of a constructor function type in a tuple
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
// Obtain the return type of a function type
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// Obtain the return type of a constructor function type
// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
// Marker for contextual 'this' type
// interface ThisType<T> { }
