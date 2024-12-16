export const setUrl = (url) => ({
  type: 'movies/setUrl',
  payload: url
})

export const setMovies = (movies) => ({
  type: 'movies/setMovies',
  payload: movies
})

export const setLoading = (loading) => ({
  type: 'movies/setLoading',
  payload: loading  
})

export const setError = (error) => ({
  type: 'movies/setError',
  payload: error
})