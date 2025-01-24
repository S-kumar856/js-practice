 Adde# Day 6 Assignment: JavaScript Variables & GitHub Basics

## Part 1: Understanding Variables

### Task 1: Variable Declaration Practice

Create a file named `variables.js` and practice different variable declarations:


// Task 1.1: Using let (for changeable values)
let studentName = "John";
studentName = "Mike";     // Can be changed
console.log(studentName); // Should print "Mike"

// Task 1.2: Using const (for fixed values)
const birthYear = 2000;
// birthYear = 2001;     // This will cause error - try it!
console.log(birthYear);

// Task 1.3: Using var (old way - try to avoid)
var oldWay = "Hello";
oldWay = "Hi";
console.log(oldWay);


### Task 2: Understanding Scopes
Create a file named `scopes.js`:


// Task 2.1: Global Scope
let globalVariable = "I am global";

// Task 2.2: Function Scope
function testFunction() {
    let functionVariable = "I am in function";
    console.log(globalVariable);      // Can access global
    console.log(functionVariable);    // Can access its own
}

// Task 2.3: Block Scope
if (true) {
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    console.log(blockVariable);       // Works here
}
// console.log(blockVariable);        // Will cause error
console.log(notActuallyBlocked);     // Works! (but avoid this)


## Part 2: GitHub Setup & Basic Commands

### Task 3: GitHub Account Creation
1. Go to github.com
2. Click "Sign up"
3. Fill in:
   - Your email
   - Create password
   - Choose username

### Task 4: First Repository
1. Click "New repository"
2. Name it: "js-practice"
3. Check "Add README file"
4. Click "Create repository"

### Task 5: Basic Git Commands
Open terminal/command prompt in your project folder:


# Clone your repository
git clone [your-repository-url]

# Add your JavaScript files
git add variables.js scopes.js

# Commit your changes
git commit -m "Added JavaScript practice files"

# Push to GitHub
git push origin main


## Practice Exercises

### Exercise 1: Variable Types
Create `practice1.js`:

// Create variables with your info
let yourName = "Your Name";
let yourAge = 22;
let isStudent = true;

// Try to change const
const graduationYear = 2023;
// graduationYear = 2024;  // Will this work?

// Print all variables
console.log("Name:", yourName);
console.log("Age:", yourAge);
console.log("Student Status:", isStudent);
console.log("Graduation Year:", graduationYear);


### Exercise 2: Scope Practice
Create `practice2.js`:

// Global scope
let courseName = "JavaScript";

function practiceScope() {
    // Function scope
    let topic = "Variables";
    console.log(courseName + " - " + topic);
    
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail);
    }
    // console.log(detail); // Try uncommenting this
}

practiceScope();


## Submission Requirements

1. Create these files:
   - variables.js
   - scopes.js
   - practice1.js
   - practice2.js

2. On GitHub:
   - Repository name: js-practice
   - All files pushed
   - README.md updated

3. Show outputs of:
   - All console.log statements
   - Any errors you encountered

## Tips for Success
- Test each variable type
- Try to break the code (it helps learning!)
- Make regular commits
- Keep code organized

## Common Mistakes to Avoid
- Don't use var
- Don't skip testing your code
- Don't forget to save files
- Don't ignore error messages

## Next Steps
After completing:
1. Try different variable values
2. Play with scopes
3. Practice git commands
4. Read error messages carefully