import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import MovieContext from '../../MoviesContext'
import ModalContext from '../ModalContext';
import { HandleDelete } from './HandleDelete';
import { HandleEdit } from './HandleEdit';

export const MovieLister = () => {

  let movies              = useContext(MovieContext).movies;
  let setMovies           = useContext(MovieContext).setMovies;
  let movieInputs     = useContext(MovieContext).movieInputs;
  let setMovieInputs  = useContext(MovieContext).setMovieInputs;
  let descriptionShow     = useContext(ModalContext).descriptionShow;
  let setDescriptionShow  = useContext(ModalContext).setDescriptionShow; 

  useEffect(() => {
    axios.get(`http://localhost:3000/Movies`).then((res) => {
      setMovies(res.data);
    });
  }, []);

return (
   <tbody className='h-[49vh] overflow-y-scroll'>
      {
      movies.map((movie, i) => {
        return (
          <tr key={movie.id} className='grid grid-cols-7 justify-between my-8'>
            {/* <ion-icon name="pencil-outline"></ion-icon> */}
            <button className='flex justify-center text-xl' onMouseEnter={(e) => e.target.innerHTML = '<ion-icon name="pencil-outline" class="p-1 bg-yellow-400 rounded-full text-black"></ion-icon>'} onMouseLeave={(e) => e.target.innerHTML = i + 1} onClick={() => HandleEdit(i, movie.id, movie, movieInputs, setMovieInputs)}>{i + 1}</button>
            <p className='flex justify-center'>         {movie.name}     </p>
            <p className='flex justify-center'>         {movie.producer} </p>
            <p className='flex justify-center'>         {movie.genre}    </p>
            <p className='flex justify-center'>         {movie.year}     </p>
            <button className='border-blue-400 border w-fit px-4 py-1 flex mx-auto rounded-md' onClick={(e) => {
              setDescriptionShow(movie.description);
            }}>
              <p>
                 توضیحات
              </p>
            </button>
            <button className='border-red-500  items-center w-fit border flex mx-auto px-4 py-1 rounded-md' onClick={() => HandleDelete(movie.id, movies, setMovies)}>
              <p>
                 حذف
              </p>
              <ion-icon name="trash-outline" class='text-red-500 mr-2'></ion-icon>
            </button>

          </tr>
        );

      })}
    </tbody>
)
}