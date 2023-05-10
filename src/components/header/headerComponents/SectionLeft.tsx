import React, { useContext, useEffect } from 'react'
import MyContext from '../../Context'
import MovieContext from '../../MoviesContext';
import { AddANewMovie } from './AddANewMovie';

export const SectionLeft = () => {

  let movieInputs     = useContext(MovieContext).movieInputs;
  let setMovieInputs  = useContext(MovieContext).setMovieInputs;

  let movies = useContext(MovieContext).movies;
  let setMovies = useContext(MovieContext).setMovies;
  return (
    <div className='flex flex-col'>
        <div>
            <p className='border-r border-r-8 border-r-yellow-400 text-white font-bold mb-2 pr-2 rounded-md'>توضیحات</p>
            <input type="text" value={movieInputs.description} className='bg-[#515050] border outline-yellow-400 border-gray-400 p-2 rounded-md text-sm text-white w-full h-24' placeholder='توضیحات درباره فیلم' onChange={(e) => {
                setMovieInputs({...movieInputs, description: e.target.value});     
            }}/>
        </div>
        <div className='self-end mt-4'>
            <button type='submit' className='w-28 h-10 rounded-md ml-4 bg-yellow-400' onClick={(e) => { e.preventDefault(); AddANewMovie(movieInputs, setMovieInputs, movies, setMovies);
             }}>ذخیره</button>
            <button type='reset'  className='w-28 h-10 rounded-md border text-white' onClick={() => {
              setMovieInputs({
                name        : ``      ,
                genre       : `Horror`,
                producer    : ``      ,
                year        : ``    ,
                description : ``
              })
            }}>انصراف</button>
        </div>
    </div>
  )
}
