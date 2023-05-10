import React, { useContext } from 'react'
import MovieContext from '../../MoviesContext';
import { RightInputs } from './SectionRightComponents/RightInputs';

export const SectionRight = () => {
  let movieInputs     = useContext(MovieContext).movieInputs;
  let setMovieInputs  = useContext(MovieContext).setMovieInputs;

  const movieInputsArray = [];
  for (let key in movieInputs) {    
    movieInputsArray.push(key);
  }
  movieInputsArray.pop()

  return (
    <div className='grid grid-cols-2 gap-x-10 gap-y-7 h-fit'>
      {movieInputsArray.map((item, i) => (
        <RightInputs key={i} item={item}/>
        ))}
      
    </div>
  )
}
