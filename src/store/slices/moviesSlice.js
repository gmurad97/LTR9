import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    likedMovies: 0,
    favorites: []
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.movies = action.payload;
        },
        toggleLike(state, action) {
            const movie = state.movies.find(movie => movie.id === action.payload);
            if (movie) {
                movie.isLiked = !movie.isLiked;
                movie.isLiked ? state.likedMovies++ : state.likedMovies--;
            }
        },
        toggleDislike(state, action) {
            const movie = state.movies.find(movie => movie.id === action.payload);
            if (movie) {
                movie.isDisliked = !movie.isDisliked;
            }
        },
        toggleFavorite(state, action) {
            const movie = state.movies.find(movie => movie.id === action.payload);
            if (movie) {
                movie.isFavorite = !movie.isFavorite;
                if (movie.isFavorite) {
                    state.favorites.push(movie);
                } else {
                    state.favorites = state.favorites.filter(fav => fav.id !== movie.id);
                }
            }
        }
    }
});

export const { setMovies, toggleLike, toggleDislike, toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
