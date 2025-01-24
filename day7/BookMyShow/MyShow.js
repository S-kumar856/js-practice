const ele = document.getElementById("main");
const title = document.querySelector(".title");
const rating = document.querySelector(".rating");
const price = document.querySelector(".price");
const seats = document.querySelector(".seats");

const movies = [
    {
        title: "Darling",
        rating: 5,
        price: 200,
        seatsAvailable: 50
    },
    {
        title: "Devara",
        rating: 2,
        price: 250,
        seatsAvailable: 25
    },
    { title: "Pushpa2", 
        rating: 3, 
        price: 300 ,
        seatsAvailable: 45
    }, 
    {
        title: "Bahunalli",
        rating: 5,
        price: 300,
        seatsAvailable: 35
    },
    {
        title: "Mirchi",
        rating: 5,
        price: 250,
        seatsAvailable: 50
    }
];

// Using map to display all movies with their details

const displayMovies = movies.map((movie) => {
    ele.innerHTML = ele.innerHTML +
        `<ul>
            <li>Title: ${movie.title}</li>
            <li>Rating: ${movie.rating}</li>
            <li>Ticket Price: ${movie.price}</li>
            <li>Seats Available: ${movie.seatsAvailable}</li>

        </ul>`
    
        // `Title: ${movie.title}, Rating: ${movie.rating}, Ticket Price: ${movie.price}, seats Available: ${movie.seatsAvailable}`
    
})
// printing the all movies details

console.log(displayMovies)

// Using map to show only available movies
 
const availableMovies = movies.map((movie) => {
    return {
        status: movie.seatsAvailable > 0 ? `Title: ${movie.title}, Rating: ${movie.rating}, Ticket Price: ${movie.price}` : 'House Full',
        seatsLeft : movie.seatsAvailable
    }
});

// printing the available movies
console.log(availableMovies)

// Using map to apply weekend surge pricing

const weekendMovies = movies.map((movie) => {
    return {
        title: movie.title,
        Price: movie.price + 150,
        rating: movie.rating,
        seatsAvailable: movie.seatsAvailable
    }
})

// printing the weekend movies
console.log(weekendMovies)