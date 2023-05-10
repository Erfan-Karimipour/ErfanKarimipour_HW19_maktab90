import './App.css'
import { useState, Context, createContext } from 'react';
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import MovieContext from './components/MoviesContext';

interface myContextTypes {
  name        : string,
  producer    : string,
  genre       : string,
  year        : number,
  description : string,
}

function App() {

  let [movieInputs, setMovieInputs] = useState<myContextTypes>({
    name        : ``,
    genre       : ``,
    producer    : ``,
    year        : 0 ,
    description : ``,
  });
  
  const [movies, setMovies] = useState([]);


  return (
    <>
    <MovieContext.Provider value={{movies, setMovies, movieInputs, setMovieInputs}}>
      <Header/>
      <Main />
    </MovieContext.Provider>
    </>
  )
}

export default App
