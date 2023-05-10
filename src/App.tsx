import './App.css'
import { useState, Context, createContext } from 'react';
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import MovieContext from './components/MoviesContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface myContextTypes {
  name        : string,
  producer    : string,
  genre       : string,
  year        : number,
  description : string,
}

function App() {

  let [movieInputs, setMovieInputs] = useState<myContextTypes>({
    name        : ``      ,
    genre       : `Horror`,
    producer    : ``      ,
    year        : null    ,
    description : ``      ,
  }); 

  let [filter, setFilter] = useState<string>(``);
  
  const [movies, setMovies] = useState([]);


  return (
    <>
    <ToastContainer />
    <MovieContext.Provider value={{movies, setMovies, movieInputs, setMovieInputs, filter, setFilter}}>
      <Header/>
      <Main />
    </MovieContext.Provider>
    </>
  )
}

export default App
