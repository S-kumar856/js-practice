// Non-Primitive datatypes
// array, object

// 1) Array
// creating a list of movies names
const Movies = [
    "Darling",
    "The Dark",
    "Interstellar",
    "Black Hole",
    "Bahuballi"
];

// printing array and its length
console.log("Movies Name:", Movies);
// output: Movies Name: [ 'Darling', 'The Dark', 'Interstellar', 'Black Hole', 'Bahuballi' ]

console.log("Number of movies:", Movies.length);
// output: "Number of movies: 5"


// 2) objects
// movies details
// adding movieInfo using the objects

const movieInfo = {
    title: "Darling",
    director: "Karunakaran",
    year:2010,
    price:{
        normal:200,
        premium:350
    },
    showTimings : ["10:00 AM", "2:00 PM", "6:00 PM"]
};

console.log("Movie Detailes:", movieInfo)

// output: 
// Movie Detailes: {
//   title: 'Darling',
//   director: 'Karunakaran',
//   year: 2010,
//   price: { normal: 200, premium: 350 },
//   showTimings: [ '10:00 AM', '2:00 PM', '6:00 PM' ]
// }


