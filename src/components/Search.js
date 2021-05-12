import React from 'react';
function Search() {
    function change(e) {
     // e.preventDefault();
        console.log(e.target.value);

      }
  return (

    <div className="App">
      <form>
        <h1>Pirate bay </h1>
        <p>Enter movie name: </p>
        <input type='text' />
        <button  type='text' onClick={change}
        > Search</button>


       
      </form>
    </div>
  );
}

export default Search;
