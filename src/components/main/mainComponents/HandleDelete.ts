import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'

export const HandleDelete = (movieInfo, movies, setMovies) => {
  
  axios.get(`http://localhost:3000/Movies?name=${movieInfo.name}`).then((res) => {
    res = res.data[0].id;
    axios.delete(`http://localhost:3000/Movies/${res}`);
    setMovies(movies.filter((movie) => movie.id != movieInfo.id))
  })
  toast.error(`${movieInfo.name} :با موفقیت حذف شد`, {theme: 'dark', autoClose: 2000})
}
