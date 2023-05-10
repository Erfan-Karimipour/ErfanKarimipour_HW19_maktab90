import { useEffect, useContext } from 'react';
import axios from "axios";


export const AddANewMovie = (movieInputs, setMovieInputs, movies ,setMovies) => {
  
  if (
    movieInputs.name          &&
    movieInputs.producer      &&
    movieInputs.year          &&
    movieInputs.description
    ){
      let newMovie = {
        
        name        : movieInputs.name,
        producer    : movieInputs.producer,
        genre       : movieInputs.genre,
        year        : movieInputs.year,
        description : movieInputs.description,
        
      }
      axios.get(`http://localhost:3000/Movies?name=${movieInputs.name}`).then((res) => {
        res = res.data[0];
        
        axios.put(`http://localhost:3000/Movies/${res.id}`, newMovie);
        setMovies([...movies.filter((item) => item.name != res.name), newMovie]);
          
    }).catch(() => {
      axios.post(`http://localhost:3000/Movies`, newMovie)
      setMovieInputs(
        {
          name        : ``,
          genre       : ``,
          producer    : ``,
          year        : 0 ,
          description : ``,
        }
      )
      setMovies([...movies, newMovie])
    })
     }  
      
}
