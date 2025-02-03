# Day 12: JavaScript Memory & Variables 🧠
## Understanding Memory Through Visualization

### 1. Hoisting Visualization 📋


Memory Creation Phase:
┌──────────────┬────────────┬───────────────┐
│   Variable   │   Value    │     State     │
├──────────────┼────────────┼───────────────┤
│ myVar        │ undefined  │ Hoisted       │
│ myLet        │    -       │ TDZ (Blocked) │
│ myConst      │    -       │ TDZ (Blocked) │
└──────────────┴────────────┴───────────────┘


#### Code Example:

// 1️⃣ Before Execution
console.log(myVar);   // undefined
console.log(myLet);   // ReferenceError!
console.log(myConst); // ReferenceError!

// 2️⃣ Declarations
var myVar = 10;
let myLet = 20;
const myConst = 30;

// 3️⃣ After Execution
console.log(myVar);   // 10
console.log(myLet);   // 20
console.log(myConst); // 30


### 2. Stack vs Heap Memory 🏢


Stack Memory (Primitives):
┌──────────┬────────┐
│    a     │   10   │
│    b     │   10   │  ← Copy of value
└──────────┴────────┘

Heap Memory (Objects):
Stack:                    Heap:
┌──────────┬────────┐    ┌─────────────────┐
│  obj1    │   ref  │───►│ name: "Alice"   │
│  obj2    │   ref  │───►│ age: 25         │
└──────────┴────────┘    └─────────────────┘


#### Code Example:

// Stack Example
let a = 10;
let b = a;    // New copy created
a = 20;       // Only 'a' changes

// Heap Example
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1;  // Shares same reference
obj1.age = 30;    // Both objects updated


### 3. Function Memory Allocation 🔄


Function Execution Memory:

Call 1:
┌─────────────┬────────────────┐
│   userId    │ "user_123"     │
│   name      │ "John"         │
└─────────────┴────────────────┘

Call 2:
┌─────────────┬────────────────┐
│   userId    │ "user_456"     │
│   name      │ "Jane"         │
└─────────────┴────────────────┘


#### Code Example:

function createUser(name) {
    // New memory space for each call
    let userId = "user_" + Math.random();
    return { userId, name };
}

let user1 = createUser("John");
let user2 = createUser("Jane");


### 4. Block Scope & TDZ Visualization 🚧


Global Scope:
┌──────────┬──────────┐
│  global  │   123    │
└──────────┴──────────┘

Block Scope: {
    ┌──────────┬──────────┐
    │  local   │   456    │ ← Only accessible
    └──────────┴──────────┘    inside block
}


#### Code Example:

let global = 123;

{
    // TDZ starts here
    // console.log(local); // Error!
    let local = 456;
    console.log(local);  // 456
} // local variable dies here

console.log(global);  // 123


### 5. Deep vs Shallow Copy 📝


Shallow Copy:
┌────────┐     ┌───────────────┐
│ obj1   │────►│ name: "Alice" │
├────────┤     │ age: 25       │
│ obj2   │────►│               │
└────────┘     └───────────────┘

Deep Copy:
┌────────┐     ┌───────────────┐
│ obj1   │────►│ name: "Alice" │
└────────┘     │ age: 25       │
              └───────────────┘
┌────────┐     ┌───────────────┐
│ obj2   │────►│ name: "Alice" │
└────────┘     │ age: 25       │
              └───────────────┘


#### Code Example:

// Shallow Copy
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1;  // Same reference

// Deep Copy
let obj3 = { name: "Bob", age: 30 };
let obj4 = JSON.parse(JSON.stringify(obj3));


### 6. Practice Exercise: Instagram Profile 📱


Instagram Profile Memory Model:

Stack (Simple Data):
┌──────────────┬────────────────┐
│ userId       │ "user_123"     │
│ isLoggedIn   │ true           │
└──────────────┴────────────────┘

Heap (Complex Data):
┌─────────────────────────────┐
│ userProfile:                │
│   name: "John Doe"          │
│   posts: [...]             │
│   followers: [...]         │
│   following: [...]         │
└─────────────────────────────┘


#### Code Implementation:

// Profile Data Structure
const profile = {
    userId: "user_123",
    name: "John Doe",
    posts: [],
    followers: new Set(),
    following: new Set()
};

// Updating Profile (Memory Impact)
function updateProfile(newData) {
    // Creates new reference for updated data
    return { ...profile, ...newData };
}


### Success Tips 🌟

1. **Memory Management:**
   - Clear unused variables
   - Use proper scope
   - Understand reference vs value

2. **Code Organization:**
   - Group related variables
   - Use meaningful names
   - Comment complex logic

3. **Testing Strategy:**
   - Test variable scope
   - Check memory leaks
   - Verify data mutations

Remember:
- Variables are like boxes in memory
- Objects share references
- Functions create new memory spaces
- Block scope is temporary