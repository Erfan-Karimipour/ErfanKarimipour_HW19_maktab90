import React, {useContext, useEffect} from 'react'
import MovieContext from '../../../MoviesContext';


export const RightInputs = ({item}: props) => {
  let movieInputs     = useContext(MovieContext).movieInputs;
  let setMovieInputs  = useContext(MovieContext).setMovieInputs;


    
  return (
    <div className='w-full'>
        <p className='border-r border-r-8 border-r-yellow-400 text-white font-bold mb-2 pr-2 rounded-md'>
            {
            item == 'name'      ? 'نام فیلم' :
            item == 'producer'  ? 'کارگردان' :
            item == 'genre'     ? 'ژانر فیلم':
            item == 'year'      ? 'سال تولید': ''
            }
        </p>
        {
        item == 'genre' ?  
        <select name="genreSelection" id="genreSelection" className='bg-[#515050] border border-gray-400 p-2 py-3 rounded-md w-full text-sm text-white outline-yellow-400' onChange={(e) => {
            setMovieInputs({...movieInputs, genre: e.target.value})
            }}>
            <option value="Horror"          >ترسناک         </option>
            <option value="Action"          >اکشن           </option>
            <option value="Drama"           >دراما          </option>
            <option value="ScienceFiction"  >علمی تخیلی     </option>
            <option value="Comedy"          >کمدی           </option>
            <option value="Fantasy"         >فانتزی         </option>
        </select>
        : 
        <input type={item == 'year' ? 'number' : 'text'} className='bg-[#515050] border border-gray-400 p-2 py-3 rounded-md text-sm w-full text-white outline-yellow-400' value={
            item == 'name'      ? movieInputs.name      :
            item == 'producer'  ? movieInputs.producer  :
            item == 'year'      ? movieInputs.year      : 
            item == 'genre'     ? movieInputs.genre     : ''
        } placeholder={
            item == 'name'      ? 'نام فیلم را بنویسید'         :
            item == 'producer'  ? 'نام کارگردان را وارد کنید'   :
            item == 'year'      ? 'سال ساخت فیلم را وارد کنید'  : ''   
        } onChange={(e) => {
            switch (item){
                case 'name'     : setMovieInputs({...movieInputs, name:     e.target.value});       break;
                case 'producer' : setMovieInputs({...movieInputs, producer: e.target.value});       break;
                case 'year'     : setMovieInputs({...movieInputs, year:     e.target.value});       break;
            }
        }} />
        }
        
    </div>
  )
}
