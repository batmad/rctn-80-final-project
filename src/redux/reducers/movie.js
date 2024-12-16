import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    url: "https://www.omdbapi.com/?apikey=9b639cb4&s=shrek",
    movies: [],
    error: false,
    loading: false,
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload
        },
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    },
})

export const { setUrl, setMovies, setError, setLoading } = movieSlice.actions

export default movieSlice.reducer