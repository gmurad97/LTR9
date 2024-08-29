import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "movies": [],
    "favorites": [],
    "likedMovies": 0,
    "dislikedMovies": 0
}

const moviesSlice = createSlice({
    "name": "movies",
    "initialState": initialState,
    "reducers": {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        toggleLike: (state, action) => {
            const currentMovie = state.movies.find(movie => movie.id === action.payload);
            if (currentMovie) {
                currentMovie.isLiked = !currentMovie.isLiked;
                if (currentMovie.isLiked) {
                    state.likedMovies++;
                    if (currentMovie.isDisliked) {
                        currentMovie.isDisliked = false;
                        state.dislikedMovies--;
                    }
                } else {
                    state.likedMovies--;
                }
            }
        },
        toggleDislike: (state, action) => {
            const currentMovie = state.movies.find(movie => movie.id === action.payload);
            if (currentMovie) {
                currentMovie.isDisliked = !currentMovie.isDisliked;
                if (currentMovie.isDisliked) {
                    state.dislikedMovies++;
                    if (currentMovie.isLiked) {
                        currentMovie.isLiked = false;
                        state.likedMovies--;
                    }
                }
                else {
                    state.dislikedMovies--;
                }
            }
        },
        toggleFavorite: (state, action) => {
            const currentMovie = state.movies.find(movie => movie.id === action.payload);
            if (currentMovie) {
                currentMovie.isFavorite = !currentMovie.isFavorite;
                if (currentMovie.isFavorite) {
                    state.favorites.push(currentMovie);
                }
                else {
                    state.favorites = state.favorites.filter(favMovies => favMovies.id !== currentMovie.id);
                }
            }
        }
    }
});

export const { setMovies, toggleLike, toggleDislike, toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;