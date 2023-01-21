import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./asset/search.svg";

const API_URL = "http://www.omdbapi.com?apikey=397285ec";


const App = () => {
const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieHub</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <MovieCard movie1={movies[0]}/>
      </div>
    </div>
  );
};

export default App;
