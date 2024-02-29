// Make all properties in T optional
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// Partial<type>
// 모든 속성을 선택적 프로퍼티로 변경한 새로운 타입을 반환
interface IPerson {
    name: string,
    age: number
};

// const person1: Person = { // Error: Property 'age' is missing
//     name: 'John'
// };

const person2: Partial<IPerson> = {
    name: 'Michael'
};

interface IOptionalProperty {
    name?: string,
    age?: number
};

// Make all properties in T required
// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

// Required<type>
// 모든 속성을 필수 프로퍼티로 변경한 새로운 타입을 반환
interface IEmployee {
    name?: string,
    age?: number
};

const employee1: IEmployee = {
    name: 'Henry'
};

// const employee2: Required<PersonOptional> = { // Error: Property 'age' is missing
//     name: 'Lisa'
// };

interface IRequiredProperty {
    name: string,
    age: number
};


// Make all properties in T readonly
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

// Readonly<type>
// 모든 속성을 읽기 전용 프로퍼티로 변경한 새로운 타입을 반환
interface IDepartment {
    id: number,
    name: string
};

const department1: IDepartment = {
    id: 10,
    name: 'Development' 
};
department1.name = 'Accounting'

const department2: Readonly<IDepartment> = {
    id: 200,
    name: 'legal'
};
// department2.name = 'Marketing' // Error: read-only property

interface IReadonlyProperty {
    readonly id: number,
    readonly name: string
}

// From T, pick a set of properties whose keys are in the union K
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// Pick<type, keys>
// 주어진 타입 속성 중에서, keys에 포함된 속성만 뽑아 새로운 타입을 반환
// type은 속성을 가지는 인터페이스나 객체 타입이어야 한다.
interface IAnimal {
    name: string,
    age: number,
    breed: string,
    vaccination: boolean
}
type TKeyPick = 'name' | 'vaccination';

const animal: Pick<IAnimal, TKeyPick> = {
    name: 'Leo',
    vaccination: true,
    // breed: 'retriever' // Error
}

interface IPick {
    name: string,
    vaccination: boolean
}


// Construct a type with a set of properties K of type T
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };

// Record<keys, type>
// 기록할 속성 key 및 속성의 타입을 받아 새로운 타입을 반환
type TUser = 'john' | 'michael';

const developments: Record<TUser, number> = {
    john: 12,
    michael: 13
};

interface IRecord {
    john: number,
    lewis: number
}


// Exclude from T those types that are assignable to U
// type Exclude<T, U> = T extends U ? never : T;

// Extract from T those types that are assignable to U
// type Extract<T, U> = T extends U ? T : never;

// Extract<type, Union>
// 유니언 type에서 Union을 추출한 새로운 타입을 반환
type TUnion1 = number | boolean;
type TUnion2 = string | number;

const out1: Extract<TUnion1, TUnion2> = 100;
// const out2: Extract<TUnion1, TUnion2> = false; // Error: not assignable

// Construct a type with the properties of T except for those in type K.
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Omit<type, keys>
// 유틸리티 타입 Pick과 반대 (Omit: (동사) 빠뜨리다, 누락[제외]시키다, 생략하다)
// 주어진 타입에서 keys 속성을 제외하고 나머지 선택한 새로운 타입을 반환
interface IFriend {
    name: string,
    age: number,
    email: string,
    hasCar: boolean
}
type TKeyOmit = 'email' | 'hasCar';

const friend: Omit<IFriend, TKeyOmit> = {
    name: 'Kim',
    age: 27,
    // haCar: true // Error: not assignable
}

interface IOmit {
    name: string,
    age: number,
    // email: string,
    // hasCar: boolean
}

// Exclude null and undefined from T
// type NonNullable<T> = T extends null | undefined ? never : T;

// NonNullable<type>
// 유니언 type에서 null과 undefined를 제외한 새로운 타입을 반환
type TUnion3 = boolean | string | number | undefined;
const test1: TUnion3 = undefined;
// const test2: NonNullable<TUnion3> = null; // Error: not assignable
// const test3: NonNullable<TUnion3> = undefined; // Error: not assignable

type TNonNullable = boolean | string | number;

// Exclude<types, ExcludedUnion>
// 유니언 types에서 ExcludedUnion를 제외한 새로운 타입을 반환
type TUnion = boolean | string | number;
const type1: Exclude<TUnion, boolean> = 'string | number';
const type2: Exclude<TUnion, boolean> = 100;
// const type3: Exclude<TExclude, boolean = false; // Error: not assignable

type TExclude = string | number;


// Obtain the parameters of a function type in a tuple
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// Parameters<type>
// 주어진 함수의 매개변수 타입을 새로운 튜플 타입으로 반환
function myFunction (i: string, j: boolean | number) {
    return `[${i}, ${j}]`;
}

const params: Parameters<typeof myFunction> = ['My score', 97];

type tupleParameters = [string | number, boolean];

// Obtain the parameters of a constructor function type in a tuple
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

// ConstructorParameters<type>
// 주어진 클래스의 매개변수 타입을 새로운 튜플 타입으로 반환
class Fruit {
    constructor (public name: string, private sweet: boolean) {}
}

const myFruit = new Fruit('apple', true);
const myPeer: ConstructorParameters<typeof Fruit> = ['peer', true];
// const myOrange: ConstructorParameters<typeof Fruit> = ['orange']; // Error: Property '1' is missing

type tupleConstructorParameters = [string, number];

// Obtain the return type of a function type
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// ReturnType<type>
// 주어진 함수의 반환(return) 타입을 새로운 타입으로 반환
function newFunction (num: number) {
    return num;
}

const result1: ReturnType<typeof newFunction> = 100;
// const result2: ReturnType<typeof newFunction> = 'No string'; // Error: not assignable

type TReturn = number;

// Obtain the return type of a constructor function type
// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

// InstanceType<type>
// 주어진 클래스의 인스턴스 새로운 타입으로 반환
class Pet {
    constructor(public name: string) {}
}

const Leo: InstanceType<typeof Pet> = new Pet('Leo'); // const Leo: Pet

type TInstanceType = InstanceType<typeof Pet> // type Leo = Pet

// Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.
// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;

// ThisParameterType<type>
// 주어진 함수의 명시적 this 매개변수 타입을 새로운 타입으로 반환
// 명시적 this 매개변수가 없는 경우 unknown을 반환
// (이를 통해 주어진 함수에 다른 타입의 this가 바인딩 되는 것을 방지할 수 있다.)
function toHex(this: number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}

// Removes the 'this' parameter from a function type.
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;

// OmitThisParameter<type>
// 주어진 함수의 명시적 this 매개변수 타입을 제거한 새로운 타입을 반환
function getId(this: typeof user1) {
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
const getAgeForOtherUser: OmitThisParameter<typeof getId> = getId;
getAgeForOtherUser.call(user2); // '200'
getAgeForOtherUser.call(user3); // 300

// Marker for contextual 'this' type
// interface ThisType<T> { }

// ThisType<type>
// 주어진 타입의 this 컨텐스트를 명시하고 별도의 타입을 반환하지 않는다.
interface IUser {
    name: string,
    getName: () => string
}

function makeNeo (methods: ThisType<IUser>) {
    return { name: 'Neo', ...methods } as IUser;
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

interface IThisType {}