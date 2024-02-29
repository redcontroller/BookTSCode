/// TS 배열 타입 (Array)---------------------------------------------------------
const arr: number[] = [1,2,3];
const arr1: Array<number> = [1,2,3];

const arrNum: number[] = [1,2,3];
const arrString: string[] = ['a','b','c'];
const arrBoolean: boolean[] = [true, false, true];

// Not useful
const arrNull: null[] = [null, null, null];
const arrUndefined: undefined[] = [undefined, undefined, undefined];

// Don't use it
const arrAny: any[] = [1, 'a', true];
const arrUnknown: unknown[] = [1, 'a', true];


const arrReadonly: readonly string[] = ["a", "b", "c"];
const arrReadonly1: ReadonlyArray<string> = ["a", "b", "c"];

let arrReadonly3: readonly string[] = ['a','b'];
let arrNormal: string[] = ['c'];

// arrReadonly.push("hello"); // error! 'readonly string[]'

arrReadonly3 = arrNormal; // ok
console.log(arrReadonly3); // ["c"]

// arrNormal = arrReadonly3; // error! 'readonly'


/// TS 다차원 배열--------------------------------------------------------------
const arr2D: number[][] = [
	[1, 2, 3],
    [4, 5, 6]
];

const arr3D: number[][][] = [[
	[1, 2, 3],
    [4, 5, 6]
]];

const arr4D: number[][][][] = [[
	[
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
]];

console.log(arr2D); // [[1,2,3],[4,5,6]], (2, 3)
console.log(arr3D); // [[[1,2,3],[4,5,6]]], (1, 2, 3)
console.log(arr4D); // [[[[1,2,3],[4,5,6]], [[7,8,9],[10,11,12]]]], (1, 2, 2, 3)

console.log(arr4D.length); // 1, [Array(2)]
console.log(arr4D[0].length); // 2, [Array(2), Array(2)]
console.log(arr4D[0][0].length); // 2, [Array(3), Array(3)]
console.log(arr4D[0][0][0].length); // 3, [1, 2, 3]


/// TS 튜플 타입 (Tuple)-----------------------------------------------------------------
let tuple: [string, number] = ['a', 1];
// tuple = [1, 'a']; // error!
// tuple[2] = 'two'; // error! no element

const stringNumberPair: [string, number] = ['a', 1];
const [inputString, inputNumber] = stringNumberPair;
console.log(inputString); // 'a'
console.log(inputNumber); // 1

console.log(stringNumberPair); // ["a", 1]

//stringNumberPair.push(true); // error! type 'string | number'

stringNumberPair.push(100);
console.log(stringNumberPair) // ["a", 1, 100]

stringNumberPair.splice(1);
console.log(stringNumberPair) // ["a"]

stringNumberPair.pop();
console.log(stringNumberPair) // []

const Either2Or3: [number, number, number?] = [1, 2];

// const Either2Or3: [number, number, (number | undefined)?]
console.log(Either2Or3[2]); // undefined

// (property) length: 2 | 3
console.log(Either2Or3.length); // 2

const stringNumberBooleans: [string, number, ...boolean[]] = ['a', 1, true, false];
const stringBooleansNumber: [string, ...boolean[], number] = ['a', true, false, 1];
const BooleansStringNumber: [...boolean[], string, number] = [true, false, 'a', 1];

// function myFnc (...args: [string, number, ...boolean[]) {
//     // name: string, version: number, ...input: boolean[]
// 	const [name, version, ...input] = args;
//     // ...
// }

const tupleReadonly: readonly [string, number] = ['a', 1];
// tupleReadonly[0] = 'two'; // error! readonly property


/// TS 다차원 튜플---------------------------------------------------------------------------
// 2D Array
const tupleInArr: [number, string, boolean][] = [[1, 'a', true], [2, 'b', false], [3, 'c', true]];

const tuple2D: [[...number[]], [...string[]]] = [
	[1, 2, 3],
    ['a', 'b', 'c']
];

const tuple3D: [[[...number[]], [...string[]]]] = [[
	[1, 2, 3],
    ['d', 'e', 'f']
]];

const tuple4D: [[[[...number[]], [...string[]]],[[...number[]], [...string[]]]]] = [[
	[
        [1, 2, 3],
        ['a', 'b', 'c']
    ],
    [
        [7, 8, 9],
        ['d', 'e', 'f']
    ]
]];

console.log(tuple2D); // [[1, 2, 3], ["a", "b", "c"]] 
console.log(tuple3D); // [[[1, 2, 3], ["a", "b", "c"]]] 
console.log(tuple4D); // [[[[1, 2, 3], ["a", "b", "c"]], [[7, 8, 9], ["d", "e", "f"]]]]
console.log(tuple4D.length); // 1, [Array(2)]
console.log(tuple4D[0].length); // 2, [Array(2), Array(2)]
console.log(tuple4D[0][0].length); // 2, [Array(3), Array(3)]
console.log(tuple4D[0][0][0].length); // 3, [1, 2, 3]