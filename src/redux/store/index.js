import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducers/movie";

const store = configureStore({
    reducer: {
        movies: movieReducer 
    }
})

export default store;