import { useEffect, useContext } from 'react';
import { toast } from 'react-toastify'
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
        toast.success(`${res.name}: فیلم با موفقیت آپدیت شد`, {theme: 'dark', autoClose: 2000})
        setMovieInputs(
          {
            name        : ``      ,
            genre       : `Horror`,
            producer    : ``      ,
            year        : ``    ,
            description : ``      ,
          }
        )
          
    }).catch(() => {
      axios.post(`http://localhost:3000/Movies`, newMovie)
      setMovieInputs(
        {
          name        : ``      ,
          genre       : `Horror`,
          producer    : ``      ,
          year        : ``    ,
          description : ``      ,
        }
      )
      setMovies([...movies, newMovie]);
      toast.success(`${newMovie.name}:فیلم جدید اضافه شد`, {theme: 'dark', autoClose: 2000})
    })
     }  
      
}
