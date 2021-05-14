import React  from 'react';

const Movie = (movies) =>{
//console.log(movies);

return (
  <div className="App">
    <div key={movies.id}>
      <p> {movies.Title}</p>
      <img src={movies.Poster}/>
      <p> Movie type: {movies.Type}</p>
      <p> Year: {movies.Year}</p>
    </div>
    <hr></hr>
  </div>
);
}

export default Movie;
