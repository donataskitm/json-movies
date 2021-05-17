import React from 'react';

const Details = (movies) =>{

return (

    <div className="App">
    <div key={movies.id}>
      
      <img src={movies.Poster} alt=""/>
      <p> {movies.Title}</p>
      <p> Year: {movies.Year}</p>
      <p> Released: {movies.Released}</p>
      <p> Runtime: {movies.Runtime}</p>
      <p> Genre: {movies.Genre}</p>
      <p> Director: {movies.Director}</p>
      <p> Writer: {movies.Writer}</p>
      <p> Actors: {movies.Actors}</p>
      <p> Type: {movies.Type}</p>
      <p> Language: {movies.Language}</p>
      <p> Imdb rating: {movies.imdbRating}</p>
      <p> Imdb votes: {movies.imdbVotes}</p>
      <p> Short description: {movies.Plot}</p>
      <button onClick = {() =>  movies.showComponent("false")}>Back</button>
     
    </div>
  </div>
 
);
}
 //
export default Details;