import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import Search from './Search';


  const Movie_list = () => {
    const [data, setMovies] = useState([]);
    const [searchWord, setWord] = useState([0]);

    useEffect(() => {
      const fetchData = async () => {
        //console.log(searchWord+"jjj");
          if (!searchWord.word ==''){ 
            const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=62a6e25e&s=${searchWord.word}*`;
            let res = await fetch(URL); // 
            let response = await res.json();
            //console.log(response.Search +"   ress");
                if (response.Search==undefined){
                  alert("No info found.");
                }
                else{
                  setMovies(response.Search);
                }
          }
          else{ 
          }
    };
    fetchData();
    }, [searchWord]);
  
    const searchW = (word)=>{
      let isOK = {word};
      if (!(isOK==null) || !(isOK=="")){
        setWord(isOK);
      }
    }
    return <div className="App">
     
    <Search startSearch={searchW}/>
     
    {data.map((movie, index)=>{    
        return <span><Movie id={index} {...movie}  /></span>
    }
)}
      </div>;
  };

export default Movie_list;
