// //Assignment1
let postTitle = "My First Post";
let likesCount = 0;
const POST_ID = "POST123";
var isPublished = false;


console.log(postTitle);   // output  = My First Post
postTitle = "Updated Post"; // 

console.log(isPublished) // output = false


likesCount = 5;
console.log(likesCount) //output = 5 because for "let" variable we can reassign the value if it is not hosited

POST_ID = "POST124";    // This will error! Why?
console.log(POST_ID) //error msg - TypeError: Assignment to constant variable.
// because for "const variable we cannot reassign the value "

// Assignment 2
let storyViews = 0;
const STORY_DURATION = 24; 

{
    // Block scope
    let storyFilter = "Normal";
    var storyLocation = "Hyderabad";
    const UPLOADED_TIME = "9:00 AM";
    console.log(storyFilter) // output: Normal because we console it in the block level means in the bract only
    console.log(UPLOADED_TIME) // output: 9:00 AM
    console.log(STORY_DURATION) // output: 24
    console.log(storyViews) // output: 0
}

// Aleart1**
// if we declare the "let" and "const" in the {} it should be accessed with in the {} only 
// we cannot access the block level variable outside the block it should through the error 

// Alert2**
// if we declare the "let" and "const" outside the block means outof "{}" 
// we can assess this variable in the "{}" means we can print the variable declared out the block, in the block


console.log(UPLOADED_TIME);  // Error! Why? // Works! Why? same as let "const" also a block level scope it dead in the bracket {} because we declare it in the bracket
console.log(storyFilter);    // Error! Why? beacuse "let" is a block scope variable it dead in the block only mean in the {} it dead 
console.log(storyLocation);  //output = Hyderabad
console.log(storyViews) // output = 0
console.log(STORY_DURATION) // output = 24
 

// # Assignment 3:

let userName = "kumar";
let followerCount = 100;

let profile = {
    name: "John Doe",
    age: 25
};

let profile2 = profile;  // here profile2 coping the reference of the profile object 

// Try changing values:
userName = "jane_doe";     // Only userName changes because here we reasigning the value without declaring it again
profile2.name = "Jane";    // Both profile and profile2 change! Why? because here profile2 share the same referance as the profile


// Assignment 4: Variable Hoisting 

console.log(views);      // What happens? output: undefined because for "var" before delcaration it assign the value undefined we call it hoisted
console.log(likes);   // What happens? output: ReferenceError: likes is not defined. because "let" and "const" cannot be hosited it get into temporary dead zone if we log it before declaration
console.log(SHARES);  // What happens? output : ReferenceError: SHARES is not defined , "const" is also a same as "let"

var views = 100; //hoisted and assinged value "undefined"
let likes = 50; // hoisted but stuck in TDZ
const SHARES = 25; // hoisted but stuck i TDZ

// Assignment 5: Primitive Data Types 

// Create these variables:
let postCaption = "Beautiful sunset!";  // String
let viewCount = 1500;                   // Number
let isLiked = false;                    // Boolean
let postTime;                           // Undefined
let oldPost = null;                     // Null

console.log(typeof postCaption);  // output:"string"
console.log(typeof viewCount);    // output:"number"
console.log(typeof isLiked);      // output:"boolean"
console.log(typeof postTime);     // output:"undefined"
console.log(typeof oldPost);      // output:"object"  for "null" we getting the type object

// Assignment 6: Object Properties 
// Create a post object:
const post = {
    id: "123",
    text: "Hello World",
    likes: 0,
    comments:50
};

// Try modifying:
post.likes = 1;          // Works! Why? because we assign the value to the in the object
post = {};           // Error! Why? output: TypeError: Assignment to constant variable. because we declare with "const" variable we cannot empty the object
post.shares = 0;    // Works! Why? for the same object we addign the new value 
console.log(post)     



//  Practice Questions 

// let x = 10;
let y = x;
x = 20;
console.log(y);  // What prints? Why? output = 10, because here y is coping the value of x and creating new place in the memory means here deep copy taking place
console.log(x); //output: 20
// on changing "x" "y" doesn't effect 

// **Spot the Error:**
const user = { name: "John" };
user.name = "kumar";      // Works or error? this will work output: kumar
user = { name: "Bob" };  // Works or error? this is will get error "TypeError: Assignment to constant variable."
// the way we declaring is wrong 
console.log(user)


// **Memory Challenge:**
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(b.value);  // What prints? Why?

// output: 20 because here "let b = a" coping the same reference as the "let a" means "b" and "a" are point to the same object 
// here shallow copy going to take place
// if we change the "b" value it will effect to the "a" and same by changing the "a" , "b" get effect