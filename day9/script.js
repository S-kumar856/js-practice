// accessing the div Id from the html page
const movieDiv = document.getElementById("movie_list");

// creating the objects

const movies_list = [{
    title: "Darling",
    Time: "10AM",
    seats: 60
},
{
    title: "Mirchi",
    Time: "2PM",
    seats: 60
},
{
    title: "RRR",
    Time: "4PM",
    seats: 60
},
{
    title: "Pushpa",
    Time: "6PM",
    seats: 60
},
{
    title: "KGF",
    Time: "8PM",
    seats: 60
},
{
    title: "Salaar",
    Time: "10PM",
    seats: 60
},
];

// now displaying the this data on the scree using JS DOM
movies_list.map((movie) => {
    movieDiv.innerHTML = movieDiv.innerHTML + `
           
            <div class="col-4 my-3 d-flex align-items-center justify-content-center">
            <div class="border border-1 border-primary rounded-3 p-5">
                <h1>Title: ${movie.title}</h1>
                <h2>Time: ${movie.Time}</h2>
                <h3>Seats: ${movie.seats}</h3>
                <button type="button" class="btn btn-primary">Book Seat</button>
                </div>
            </div>
        ` ;
});
