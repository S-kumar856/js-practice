// Task 1 : Creating an array of 3 student objects
// creating multiple object using the array is known as arrays of object
// studentInfo is a Array name , we using [] for array declaration and {} for object declaration,
// in array we declaring the multiple object , seperting with the "," after every object declared

const studentInfo = [
    {
        name : "Kumar",
        age : 22,
        grade : "A"
    },
    {
        name : "Shiva Kumar",
        age : 25,
        grade : "B"
    },
    {
        name : "Vinod",
        age : 23,
        grade : "C"
    }
];


// Task 2: Creating an array of 3 mobile objects using arrays of object

const Mobiles = [
    {
        brand:"Apple",
        price: 120000,
        color: "black"
    },
    {
        brand:"Redmi",
        price: 20000,
        color: "skyblue"
    },
    {
        brand:"Samsung",
        price: 50000,
        color: "white"
    }
];

// printing the outputs of all array of object
// task 2 consoling
console.log("Mobile Details:", Mobiles)
console.log("mobile detail at index 0:", Mobiles[0])
console.log("mobile brand name at index 0:", Mobiles[0].brand)

console.log("----------------------------------------------")
// task 1 consoling

console.log("studentInfo: ", studentInfo)
console.log("studentInfo at index 0 :", studentInfo[0])
console.log("studentInfo name at index 0:", studentInfo[0].name)
