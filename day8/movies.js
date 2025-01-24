

// Assignment 1: Movie Object Creation 
const Theater = {
    Theater_name: "AMb Cinemas",
    location: "HiTech City",
    movie_list: [
        {
            title: "Sky Force",
            genre:"Action,Historical,Thriller",
            shows: ["10AM", "3PM", "9PM"],
            seats: [60, 90, 20],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjQuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-sgpsxzcesz-portrait.jpg"
        },
        {
            title: "Ramayana: The Legend of Prince Rama",
            genre:"Adventure , Anime , Drama , Mythological",
            shows: ["9AM", "12PM", "4PM"],
            seats: [60, 90, 75],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTMwLjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413205-xaxuvqlljt-portrait.jpg"
        },
        {
            title: "Sankranthiki Vasthunam",
            genre:"Action , Comedy , Romantic",
            shows: ["10AM", "2PM", "6PM"],
            seats: [60, 90, 50],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00418119-urxwxzudkv-portrait.jpg"
        },
        {
            title: "Daaku Maharaaj",
            shows: ["10AM", "3PM", "9PM"],
            genre:"Action , Drama , Thriller",
            seats: [60, 90, 50],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC44LzEwICA2MS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419964-lkjnsvyufh-portrait.jpg"
        },
        {
            title: "Game Changer",
            shows: ["10AM", "2PM", "6PM"],
            genre:" Action , Drama , Political",
            seats: [60, 90, 75],
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICA4OC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311772-dyqxbymvgu-portrait.jpg"
        },
    ]
};


console.log("Theater Name:", Theater.Theater_name);
console.log("Theater Location:", Theater.location);;;
console.log("First Movie:", Theater.movie_list[0].title);
console.log("Second Movie:", Theater.movie_list[1].title);
console.log("Third Movie:", Theater.movie_list[2].title);
console.log("Fourth Movie:", Theater.movie_list[3].title);
console.log("Fifth Movie:", Theater.movie_list[4].title);

// Assignment 2: DOM Movie Display  

// here we accessing id from the html and to get id we inbuilt function "getElementById"
let container = document.getElementById('movies');

// here we accessing "Class name" from the html and to access "class name"
// we have to use queryselector inbuilt function and include "." front of the class name 
// let container = document.querySelector('.movie_list')

// using forEach loop we traversing the "Theater object " and getting all info individually and showing 
// that info on the display 

Theater.movie_list.map(movie => {
    let card = `
    <div class="col-md-3">
        <div class="card mb-3" style="width: 15rem;">
            <img src=${movie.image} class="card-img-top" style="height: 300px" alt="..." >
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p>${movie.genre}</p>
                <div class = "show">
                    <div class="col-md-10">
                        ${movie.shows.map(time =>`
                        <button class="btn btn-primary btn-sm m-2 ">
                        ${time}
                        </button>-
                        (${movie.seats[movie.shows.indexOf(time)]}  seats)
                        `).join('')}
                    </div>
                </div>
    
            </div>
        </div>
      `;
    container.innerHTML = container.innerHTML + card;
});
