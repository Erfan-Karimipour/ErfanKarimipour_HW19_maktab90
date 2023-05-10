import React from 'react'
import axios from 'axios';

export const HandleDelete = (id, movies, setMovies) => {
  setMovies(movies.filter((movie) => movie.id != id))
  axios.delete(`http://localhost:3000/Movies/${id}`);
}
