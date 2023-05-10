import React, { useContext, useState } from 'react'
import axios from 'axios'
import MyContext from '../Context'
import { MovieLister } from './mainComponents/MovieLister.jsx';
import { Modal } from './mainComponents/Modal.js';
import ModalContext from './ModalContext.js';

export const Main = () => {
  let [descriptionShow, setDescriptionShow] = useState('');


  return (
    <div className='text-white h-[60vh] bg-[#595959] pt-4 px-12'>
      <p className='text-2xl font-bold border-r-8 rounded-lg border-yellow-400 pr-2 mb-4'>
       لیست فیلم
      </p>

      <table className='w-full flex flex-col'>
        <thead className='text-xl'>
          <tr className='w-full grid grid-cols-7 border-b-2 pb-2'>
            <td className='flex justify-center'>ردیف</td>
            <td className='flex justify-center'>نام فیلم</td>
            <td className='flex justify-center'>کارگردان</td>
            <td className='flex justify-center'>ژانر فیلم</td>
            <td className='flex justify-center'>سال ساخت</td>
            <td className='flex justify-center'>توضیحات</td>
            <td className='flex justify-center'>حذف</td>
            </tr>
        </thead>
        <ModalContext.Provider value={{descriptionShow, setDescriptionShow}}>
          <MovieLister />
          <Modal />
        </ModalContext.Provider>
      </table>
    </div>

  )
}
