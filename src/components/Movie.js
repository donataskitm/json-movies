import React  from 'react';

const Movie = ({movies}) =>{
console.log(movies);


return (
  
  <div className="App">
    
    {movies.map(({movie, index}) => (
      <div key={index}>
      <p> {movie.Title}</p>
      <img src={movie.Poster}/>
      <p> {movie.Type}</p>
      <p> {movie.Year}</p>
    </div>
    ))}
   
    Veikia Movie
   
  </div>
);

}



export default Movie;
