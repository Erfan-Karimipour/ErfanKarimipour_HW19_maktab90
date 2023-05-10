import React, {useContext} from 'react'
import MovieContext from '../../MoviesContext';

export const HandleEdit = (i, id, movie, movieInputs, setMovieInputs) => {

    console.log(i, id, movie);
    
    setMovieInputs({
        name        : movie.name,
        genre       : movie.genre,
        producer    : movie.producer,
        year        : movie.year,
        description : movie.description,
    })
}
