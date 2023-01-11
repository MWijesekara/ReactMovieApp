
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com?apikey=182dae73";

function App() {
  const [movies, setmovies] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };
 
  useEffect(() => {
    searchMovies("Avatar");
  }, []);
  return (
    <div className="app">
      <h1>Movie Theatre</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(SearchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>"No Movie"</h2>
        </div>
      )}
    </div>
  );
}

export default App;
