# ReactJS-Tutorial 
## ReactJS and TypeScript SetUp
1. Create ReactJS Typescript App
```
# npx create-react-app <name> --template typescript
```
2. Start ReactJS local server
```
# npm start
```

## TypeScript
1. Basic Types
```
let name: string;
let age: number;
let isStudent: Boolean;
let hobbies: string[];  // Array
let role: [number, string];  // Tuple 

let name: any; // Can be any type 
let age: unknown; 

// Union
let age: number | string; // Allow a variable to have multiple types 
```
2. Declaring Object 
```
let person: Object;  // Not recommended
// Recommended Way
type Person = {  // Creating Type
    name: string;
    age?: number;  // "?" make element optional
}
    or
interface Person {  // Creating Type
    name: string;
    age?: number;  // "?" make element optional
}

let person: Person = {  // Declaring object
    name: "John"
}

let lotOfPeople: Person[]; //Declaring an array of Objects 
```
3. Function
```
// Declaring a function 
let printName: (name: string) => void // "void" is the return value
    or
function printName(name: string){
    console.log(name);
}
printName("John")
```
4. Void vs Never
- "void" returns undefined
- "never" does not returns anything
5. Aliases (type and interface)
- type
```
type X = {
    a: string;
    b: number;
}

// extending X to Y
type Y = X & {  //  Can also be use to extend "interface"
    c: string;
    d: boolean;
}

let y: Y = {
    a: "Testing";
    b: 10;
    c: "Test";
    d: false;
}
```
- interface - can be used with classes
```
interface Person {  
    name: string;
    age?: number;  
}

// extending Person to Guy
interface Guy extends Person {  // Can also be use to extend "type"
    profession: string;
}
```