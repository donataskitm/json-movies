import React, { useState, useEffect } from 'react';
import Details from './Details';
import Movie from './Movie';
import Search from './Search';


  const Movie_list = () => {
    const [data, setMovies] = useState([]); //saugoti atsakymui pagal nuoroda, grazinancia daug filmu
    const [data1, setMovies1] = useState([]);//saugoti atsakymui pagal nuoroda, grazinancia 1 filma
    const [searchWord, setWord] = useState([0]); // saugoti callback reiksmei is Search.js
    const [searchWord1, setWord1] = useState([]);// saugoti callback reiskmei is Movie.js
    const [shouldShow, setShow] = useState(true); //saugoti callback reiksmei: is Details.js
    
   

    useEffect(() => {
      const fetchData = async () => {
        try{
          if (!searchWord.word ==''){ //jei reiksme netuscia
            const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=62a6e25e&s=${searchWord.word}*`;
            let res = await fetch(URL); // 
            let response = await res.json();
                if (response.Search==undefined){//jei grazino ne tuscia atsakyma
                  alert("No info found.");
                }
                else{
                  setMovies(response.Search); //saugom atsakyma i state reiksme, grazinancia daug filmu
                }
          }
          else{ 
          }
          
        }catch (error) {console.error(error);}
    };
    fetchData();
    }, [searchWord]); //jei reiksme atsinaujins, bus vykdoma funkcija


    useEffect(() => {
      const fetchData = async () => {
        try{
          if (!searchWord1 ==''){ 
            const URL = `http://www.omdbapi.com/?apikey=62a6e25e&i=${searchWord1}&plot=full`;
            let res = await fetch(URL); // 
            let response = await res.json(); 
                if (response==undefined){
                  alert("No info found.");
                }
                else{
                  setMovies1(response); //saugom atsakyma i state reiksme, grazinancia 1 filma           
                } 
          }
          else{ 
          }
        }catch (error) {console.error(error);}
    };
    fetchData();
    
    }, [searchWord1]);//jei reiksme atsinaujins, bus vykdoma funkcija

    const searchW = (word)=>{ //perimam callback reiksme word is Search.js
      let isOK = {word};
      if (!(isOK==null) || !(isOK=="")){ //patikrinam ar ne tuscia reiksme ivedimo laukelyje
        setWord(isOK); //perduodam reiksme saugoti i searchWord kintamaji
        
      }
    }

    const searchW1 = (word1)=>{ ////perimam callback reiksme word1 is Movie.js
      if (!(word1==null) || !(word1=="")){
        setWord1(word1); //perduodam reiksme saugoti i searchWord1 kintamaji
      }
    }


  const startShowComponent = (word2)=>{ //perimam callback reiksme word2 is Details.js
      setShow(word2); //perduodam reiksme saugoti i shouldShow kintamaji
  }

//

    return <div className="App">

{shouldShow?(<Search startSearch={searchW}/>):null}
 
{data.map((movie, index)=>{  return <span>{shouldShow?(<Movie id={index} {...movie}  startSearch1={searchW1} startShow={startShowComponent}/>):null}</span>
    }
)}
{shouldShow?(null ):<span><Details {...data1} showComponent={startShowComponent} /></span>}

      </div>;

  };

export default Movie_list;
