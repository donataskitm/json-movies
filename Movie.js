import React from 'react';

const Movie = (movies) =>{

return (
 
  <div className="App"> <div key={movies.id}> 
      <p> {movies.Title}</p>
      <img src={movies.Poster} alt=""/>
      <p> Movie type: {movies.Type}</p>
      <p> Year: {movies.Year}</p>
      <button onClick={ ()=>movies.startSearch1(movies.imdbID)}>More info</button> 
    </div>
    <hr></hr>
  </div>
);
}


export default Movie;
