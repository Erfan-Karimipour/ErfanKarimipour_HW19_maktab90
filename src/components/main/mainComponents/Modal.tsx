import React, { useContext } from 'react'
import ModalContext from '../ModalContext';

export const Modal = () => {

  let descriptionShow = useContext(ModalContext).descriptionShow;
  let setDescriptionShow = useContext(ModalContext).setDescriptionShow; 
    
  return (
    <>
      <div className={descriptionShow ? 'absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 backdrop-blur-sm cursor-pointer' : 'hidden'} onClick={() => setDescriptionShow('')}>
      </div>
      <div className={descriptionShow ? 'absolute p-10 top-32 bottom-32 right-0 left-0 bg-[#424242] border-yellow-400 border rounded-sm sm:left-32 sm:right-32' : 'hidden'}>
          <div className='flex w-full justify-between'>
            <p className='text-3xl font-bold'>توضیحات</p>
            <button onClick={() => setDescriptionShow('')}>
              <ion-icon name="close-circle" class='text-yellow-400 text-4xl'></ion-icon>
            </button>
          </div>
          <p className='mt-2 text-lg'>{descriptionShow}</p>
      </div>
    </>
  )
}
