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
// 주어진 타입 속성 중에서, keys 포함된 속성만 뽑아 새로운 타입을 반환
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

// Extract<type1, type2>
// 유니언 type1에서 유니언 type2를 추출한 새로운 타입을 반환
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

// Exclude<types, types2>
// 유니언 types1에서 유니언 types2를 제외한 새로운 타입을 반환
type TUnion = boolean | string | number;
const type1: Exclude<TUnion, boolean> = 'string | number';
const type2: Exclude<TUnion, boolean> = 100;
// const type3: Exclude<TExclude, boolean = false; // Error: not assignable

type TExclude = string | number;


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