import React from 'react';
import Movie from './Movie';
import Search from './Search';

async function getMovies() {
  const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=62a6e25e&s=matr*`;
  const response = await fetch(URL);
  const movies = await response.json();
  return movies;
}

function Movie_list() {

  return (
    <div className="App">
      <Search />
      <Movie movies={getMovies()}/>

      Veikia1
      
    </div>
  );
}

export default Movie_list;
