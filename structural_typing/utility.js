"use strict";
// Make all properties in T optional
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };
;
// const person1: Person = { // Error: Property 'age' is missing
//     name: 'John'
// };
const person2 = {
    name: 'Michael'
};
;
;
const employee1 = {
    name: 'Henry'
};
;
;
const department1 = {
    id: 10,
    name: 'Development'
};
department1.name = 'Accounting';
const department2 = {
    id: 200,
    name: 'legal'
};
const animal = {
    name: 'Leo',
    vaccination: true,
    // breed: 'retriever' // Error
};
const developments = {
    john: 12,
    michael: 13
};
const out1 = 100;
const friend = {
    name: 'Kim',
    age: 27,
    // haCar: true // Error: not assignable
};
const test1 = undefined;
const type1 = 'string | number';
const type2 = 100;
// Obtain the parameters of a function type in a tuple
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
// Parameters<type>
// 주어진 함수의 매개변수 타입을 새로운 튜플 타입으로 반환
function myFunction(i, j) {
    return `[${i}, ${j}]`;
}
const params = ['My score', 97];
// Obtain the parameters of a constructor function type in a tuple
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
// ConstructorParameters<type>
// 주어진 클래스의 매개변수 타입을 새로운 튜플 타입으로 반환
class Fruit {
    constructor(name, sweet) {
        this.name = name;
        this.sweet = sweet;
    }
}
const myFruit = new Fruit('apple', true);
const myPeer = ['peer', true];
// Obtain the return type of a function type
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// ReturnType<type>
// 주어진 함수의 반환(return) 타입을 새로운 타입으로 반환
function newFunction(num) {
    return num;
}
const result1 = 100;
// Obtain the return type of a constructor function type
// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
// InstanceType<type>
// 주어진 클래스의 인스턴스 새로운 타입으로 반환
class Pet {
    constructor(name) {
        this.name = name;
    }
}
const Leo = new Pet('Leo'); // const Leo: Pet
// Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
// ThisParameterType<type>
// 주어진 함수의 명시적 this 매개변수 타입을 새로운 타입으로 반환
// 명시적 this 매개변수가 없는 경우 unknown을 반환
// (이를 통해 주어진 함수에 다른 타입의 this가 바인딩 되는 것을 방지할 수 있다.)
function toHex() {
    return this.toString(16);
}
function numberToString(n) {
    return toHex.apply(n);
}
// Removes the 'this' parameter from a function type.
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
// OmitThisParameter<type>
// 주어진 함수의 명시적 this 매개변수 타입을 제거한 새로운 타입을 반환
function getId() {
    return this.id;
}
// 기존 데이터
const user1 = {
    id: 101 // number
};
getId.call(user1); // 12
// 신규 데이터1
const user2 = {
    id: '200' // string
};
// 신규 데이터2
const user3 = {
    id: 300 // string
};
// getId.call(user2); // Error: not assignable
// cat을 기준으로 설계한 함수 getAge는 일부 다른 타입을 가지는 새로운 데이터 dog를 this로 사용 불가
// OmitThisParameter를 통해 명시적 this를 제거한 새로운 타입의 함수를 만들 수 있다.
// getId를 직접 수정하지 않고 신규 데이터를 사용할 수 있다.
// 하지만 이를 통해 this.id에는 어떤 값도 들어갈 수 있음을 주의하자.
const getAgeForOtherUser = getId;
getAgeForOtherUser.call(user2); // '200'
getAgeForOtherUser.call(user3); // 300
function makeNeo(methods) {
    return { name: 'Neo', ...methods };
}
const neo = makeNeo({
    getName() {
        return this.name;
    }
});
// 함수 makeNeo의 인수로 사용되는 메서드 getName은 내부에서 this.name을 사용하고 있기 때문에
// thisType을 통해 명시적으로 this 컨텍스트를 설정해 준다.
// 단, thisType은 별도의 타입을 반환하지 않기 때문에 makeNeo 반환값({name:'Neo', ...methods})에
// 대한 타입이 정상적으로 추론(Inference)되지 않는다.
// 따라서 as IUser와 같이 따로 타입을 단언(Assertion)해야 neo.getName을 정상적으로 호출할 수 있다.
neo.getName(); // Neo
