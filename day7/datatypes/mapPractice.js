// Map function

// task 1: creating an array of 5 movies objects
const movies = [
    {
        title: "Darling", rating: 5,
        price: 200
    },
    {
        title: "Devara",
        rating: 2,
        price: 250
    }, { title: "Pushpa2", rating: 3, price: 300 }, {
        title: "Bahunalli",
        rating: 5,
        price: 300
    },
    {
        title: "Mirchi",
        rating: 5,
        price: 250
    }
];

console.log(movies)
 // task2 : using map to create a "premium" price

 const premiumPrice = movies.map((price) => {
    return (
        `${price.title} -- ₹${price.price + 100}`
    )
})

console.log("Price + GST: ", premiumPrice)

4// task: Use map to create movie recommendations based on rating

const movieRecommendations = movies.map((recommendations) => {
    return (
        recommendations.rating > 2 ? `${recommendations.title} -- Watch this movie` :
            `${recommendations.title} -- Don't watch this movie`
    )
})

console.log("Movie Recommendations: ",movieRecommendations)

