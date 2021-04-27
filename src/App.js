import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import MovieItem from "./components/MovieItem/MovieItem";
import getMovies from "./hooks/getMovies";

const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=83eab7bc3ad79bad34496c8ab25b97fe&language=en-US`;

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const movieData = await getMovies();
      setMovies(movieData);
      console.log(movieData);
    })();
  }, []);

  const SearchedMovie = async (e) => {
    e.preventDefault();
    const inputMovie = e.target.elements.inputmovies.value;
    const searchedMovie = await axios.get(`${SEARCH_URL}&query=${inputMovie}`);
    setMovies(searchedMovie.data.results);
    console.log(searchedMovie.data.results);
  };
  return (
    <div className="App">
      <Navbar SearchedMovie={SearchedMovie} />
      <MovieItem movies={movies} />
    </div>
  );
};

export default App;
