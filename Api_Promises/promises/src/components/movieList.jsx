import React, { useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showtimes, setShowtimes] = useState({});
    const [showtime, setShowtime] = useState(false);

    const loadMovies = async () => {
        setLoading(!loading);
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_MOVIEDB_KEY}`
            );
            setMovies(res.data.results);
            console.log('Movies:', res.data.results);
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        } finally {
            setLoading(!loading);
        }
    };

    const loadShowtimes = (movieId) => {
        setShowtime(!showtime);

        // Sample showtimes
        const movieShowtimes = [
            "10:00 AM",
            "2:00 PM",
            "6:00 PM"
        ];

        // Save showtimes for this movie
        setShowtimes(prev => ({
            ...prev,
            [movieId]: movieShowtimes
        }));
    };

    return (
        <div className="p-6">
            <button
                onClick={loadMovies}
                className="mb-6 rounded-md bg-cyan-600 py-2 px-4 text-white text-sm font-medium hover:bg-cyan-700 transition-all"
            >
                {loading ? 'Loading...' : 'Load Movies'}
            </button>

            {movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden"
                        >
                            <div className="h-72 overflow-hidden">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="mb-2">
                                    <p className="text-slate-800 text-lg font-semibold truncate">
                                        {movie.title}
                                    </p>
                                    <p className="text-slate-600 text-sm">
                                        ⭐ {movie.vote_average} |  {movie.release_date}
                                    </p>
                                </div>
                                <p className="text-slate-600 text-sm leading-normal line-clamp-3">
                                    {movie.overview}
                                </p>
                                <button
                                    className="w-full mt-4 rounded-md bg-cyan-600 py-2 text-white text-sm font-medium hover:bg-cyan-700 transition-all"
                                    type="button"
                                    onClick={() => loadShowtimes(movie.id)}
                                >
                                    {showtimes[movie.id] ? 'Hide Showtimes' : 'View Details'}
                                </button>
                                
                                {showtimes[movie.id] && (
                                    <ul className="mt-2 space-y-1 text-sm text-slate-700">
                                        {showtimes[movie.id].map((time, index) => (
                                            <li key={index} className="bg-slate-100 px-2 py-1 rounded">
                                                 {time}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-slate-800 text-lg font-semibold">No movies found</div>
            )}

        </div>
    );
};

export default MovieList;
