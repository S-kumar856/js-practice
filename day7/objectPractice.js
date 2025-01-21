// Task 1: Create a Student object using the simple way (object literal)
// type 1: object literal
const Student = {
    name: 'Kumar',
    age: 22,
    grade: 'A',
}

// type 2: Create empty object first, then add properties
// creating a empty object and adding the properties using the dot notation
const Student1 = {};
Student1.name = 'Kumar';
Student1.age = 22;
Student1.grade = 'A';

// type 3: Creating object using square bracket notation

const Student2 = {};
Student2['name'] = 'Kumar';
Student2['age'] = 22;
Student2['grade'] = 'A';


// Task 2: creating mobile phone object
// type 1: object literal

const Mobile = {
    brand: 'Samsung',
    model: 'Galaxy S10',
    price: 50000,
    color: 'Black',
}


// type 2 : Create empty object first, then add properties
// creating a empty object and adding the properties using the dot notation
const Mobile1 = {};
Mobile1.brand = 'Samsung';
Mobile1.model = 'Galaxy S10';
Mobile1.price = 50000;
Mobile1.color = 'Black';


// type 3: Creating object using square bracket notation

const Mobile2 = {};
Mobile2['brand'] = 'Samsung';
Mobile2['model'] = 'Galaxy S10';
Mobile2['price'] = 50000;
Mobile2['color'] = 'Black';


// printing the each object using console.log()
// student object printing
console.log("Student object: ", Student);
console.log("Student1 object: ", Student1);
console.log("Student2 object: ", Student2);


// mobile object printing
console.log("Mobile object: ", Mobile);
console.log("Mobile1 object: ", Mobile1);
console.log("Mobile2 object: ", Mobile2);
