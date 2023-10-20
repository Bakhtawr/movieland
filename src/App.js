import './App.css';
import { useState, useEffect } from 'react';
import Movies from './Movies';
import Icon from './search.svg'

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";


function App() {

  const [searchterm, setsearchTerm] = useState("");
  const [movies, setMovies] = useState("");

  useEffect(() => {
    searchmovies("batman");
  },[])


  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data  = await response.json();
    setMovies(data.Search)
  }


  return (
    <div className="App">
      <div className='container'>
      <h1 style={{textAlign: 'center'}}> Movies Land </h1>

      </div>

      <div className='container'>
             <div className='search'>
              <input 
              placeholder='Search Movie Title'
              value={searchterm}
              onChange={(e) => setsearchTerm(e.target.value)}
              />
              <img 
              src={Icon}
              alt='search'
              onClick={() => searchmovies(searchterm)}
              />
      </div>
            
              </div>
              {movies.length > 0 ?  (
                <div className='container'>
                   {movies.map((movie) => (
                 <Movies movie={movie}/>
                   ))}
                  </div>

              ): (
                <div className="empty">
                    <h2>No movies found</h2>
                    </div>
              )}
             
             </div>
  );
}

export default App;
