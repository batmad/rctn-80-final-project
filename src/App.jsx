import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setMovies, setUrl } from "./redux/reducers/movie";
import Header from "./component/Header";
import Movie from "./component/Movie";
import Search from "./component/Search";
import NotFound from "./component/NotFound";
import Loading from "./component/Loading";

const App = () => {
  const defaultUrl = "https://www.omdbapi.com/?apikey=9b639cb4";
  const dispatch = useDispatch();
  const { movies, error, loading, url } = useSelector(state => state.movies);

  const handleSearch = (input) => {
    if (input.trim() === "") {
      alert("Please enter a search input");
      return;
    }
    dispatch(setUrl(defaultUrl + "&s=" + input))
  }

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      dispatch(setLoading(true))
      try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.Response === "False") {
          dispatch(setError(true));
          return
        }

        dispatch(setError(false));
        dispatch(setMovies(result.Search));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setLoading(false))
      }
    };

    fetchMovies();
  }, [url, dispatch]);
  
  return (
    <>
      <Header title="MyMovies">
        <Search handleSearch={handleSearch}/>
      </Header>

      {
        loading ? ( <Loading /> ) :
          error ? < NotFound title="Movie not found" message="Try another search input" /> : 
            <Movie movies={movies}/>
      }
    </>
  )
}

export default App
