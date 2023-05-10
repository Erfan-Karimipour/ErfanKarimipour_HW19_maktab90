import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import MovieContext from '../../MoviesContext'
import ModalContext from '../ModalContext';
import { HandleDelete } from './HandleDelete';
import { HandleEdit } from './HandleEdit';

export const MovieLister = ({search}: props) => {

  let movies              = useContext(MovieContext).movies;
  let setMovies           = useContext(MovieContext).setMovies;
  let movieInputs         = useContext(MovieContext).movieInputs;
  let setMovieInputs      = useContext(MovieContext).setMovieInputs;
  let descriptionShow     = useContext(ModalContext).descriptionShow;
  let setDescriptionShow  = useContext(ModalContext).setDescriptionShow; 
  let filter              = useContext(MovieContext).filter;
  
  useEffect(() => {
    axios.get(`http://localhost:3000/Movies`).then((res) => {
      setMovies(res.data);
    });
  }, []);

return (
   <tbody className='h-[38vh] md:h-[48vh] overflow-y-scroll overflow-x-hidden'>
      {
      movies.map((movie, i) => {
        if (!filter || filter == movie.genre){
          if (!search || search.length < 3 || movie.name.includes(search)){
            return (
              <tr key={movie.id} className='grid grid-cols-5 lg:grid-cols-7 sm:text-lg text-sm justify-between my-8'>
                <button className='flex justify-center text-xl' onMouseEnter={(e) => e.target.innerHTML = '<ion-icon name="pencil-outline" class="p-1 bg-yellow-400 rounded-full text-black"></ion-icon>'} onMouseLeave={(e) => e.target.innerHTML = i + 1} onClick={() => HandleEdit(i, movie.id, movie, movieInputs, setMovieInputs)}>{i + 1}</button>
                <p className='flex justify-center'>         {movie.name}     </p>
                <p className='justify-center lg:inline-flex hidden'>         {movie.producer} </p>
                <p className='flex justify-center'>         {
                  movie.genre == 'Horror'         ? 'ترسناک'      :
                  movie.genre == 'Action'         ? 'اکشن'        :
                  movie.genre == 'Drama'          ? 'دراما'       :
                  movie.genre == 'ScienceFiction' ? 'علمی تخیلی' :
                  movie.genre == 'Comedy'         ? 'کمدی'        :
                  movie.genre == 'Fantasy'        ? 'فانتزی'      : ''
                }</p>
                <p className='justify-center lg:inline-flex hidden'>         {movie.year}     </p>
                <button className='border-blue-400 border w-fit p-0 md:px-4 md:py-1 flex mx-auto rounded-md' onClick={(e) => {
                  setDescriptionShow(movie.description);
                }}>
                  <p>
                     توضیحات
                  </p>
                </button>
                <button className='border-red-500  items-center w-fit border flex mx-auto px-4 py-1 rounded-md' onClick={() => HandleDelete(movie, movies, setMovies)}>
                  <p>
                     حذف
                  </p>
                  <ion-icon name="trash-outline" class='text-red-500 mr-2'></ion-icon>
                </button>
              </tr>
            );
          }
        }

      })}
    </tbody>
)
}