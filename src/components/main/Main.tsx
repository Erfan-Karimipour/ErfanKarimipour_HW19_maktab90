import React, { useContext, useState } from 'react'
import axios from 'axios'
import { MovieLister } from './mainComponents/MovieLister.jsx';
import { Modal } from './mainComponents/Modal.js';
import ModalContext from './ModalContext.js';
import MovieContext from '../MoviesContext.js';
import { HandleSearch } from './mainComponents/HandleSearch.js';

export const Main = () => {
  let [descriptionShow, setDescriptionShow] = useState('');
  let setFilter = useContext(MovieContext).setFilter;

  let [search, setSearch] = useState<string>(``);

  return (
    <div className='text-white h-[50vh] md:h-[60vh] bg-[#595959] pt-4 md:px-12'>
      <p className='text-2xl font-bold border-r-8 rounded-lg border-yellow-400 pr-2 mb-4'>
       لیست فیلم
      </p>

      <table className='w-full flex flex-col'>
        <thead className='text-xl'>
          <tr className='w-full grid lg:grid-cols-7 grid-cols-5 text-sm sm:text-lg font-bold border-b-2 pb-2'>
            <td className='flex justify-center'>ردیف</td>
            <td className='flex justify-center'>
              <input type="text" className='bg-[#595959] w-full text-center placeholder:text-white outline-yellow-400' placeholder='نام فیلم' onChange={(e) => {
                let timeout;
                clearTimeout(timeout);
                timeout = setTimeout(() => { 
                  setSearch(e.target.value); 
                  console.log(search);
                  }, 1000);
              }}/>
            </td>
            <td className='justify-center lg:inline-flex hidden'>کارگردان</td>
            <td className='flex justify-center w-full'>
              <select className='bg-[#595959] outline-none w-full text-center' onChange={(e) => setFilter(e.target.value)}>
                <option value=""                >ژانر             </option>
                <option value="Horror"          >ترسناک           </option>
                <option value="Action"          >اکشن             </option>
                <option value="Drama"           >دراما            </option>
                <option value="ScienceFiction"  >علمی تخیلی       </option>
                <option value="Comedy"          >کمدی             </option>
                <option value="Fantasy"         >فانتزی           </option>
              </select>
            </td>
            <td className='justify-center lg:inline-flex hidden'>سال ساخت</td>
            <td className='flex justify-center'>توضیحات</td>
            <td className='flex justify-center'>حذف</td>
            </tr>
        </thead>
        <ModalContext.Provider value={{descriptionShow, setDescriptionShow}}>
          <MovieLister search={search}/>
          <Modal />
        </ModalContext.Provider>
      </table>
    </div>

  )
}
