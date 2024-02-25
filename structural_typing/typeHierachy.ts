// type hierachy
type neverType = never;
type numType = number;
type undefinedType = undefined;
type nullType = null;
type unknownType = unknown;
type anyType = any;
type voidType = void;
type bigintType = bigint;
type tupleType = [number];
type arrayType = number[];


type resultType = numType & neverType; // intersection
type result2Type = undefinedType & neverType; // never
type result3Type = nullType & neverType; // never
type result4Type = unknownType & anyType; // any
type result5Type = voidType & undefinedType; // undefined
type result6Type = bigintType & numType; // never
type result7Type = tupleType & arrayType; // 

// never is bottom type
// unknown is top type


