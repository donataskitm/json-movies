import React from 'react';
function Search({startSearch}) {
    
  let textInput = React.createRef();  // React use ref to get input value
  //let onOnclickHandler = (e) => {
   // console.log(textInput.current.value); 
   
 // };
  return (
    <div className="App">
      <h1>Pirate bay </h1>
      <p>Enter movie name: </p>
        <input ref={textInput} type="text" />
        <button  type='text' placeholder="Search by title" onClick={()=>startSearch(textInput.current.value)}> Search</button>
    </div>
  );
}

export default Search;
