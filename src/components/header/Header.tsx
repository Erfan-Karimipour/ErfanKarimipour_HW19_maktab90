import React, { useEffect } from 'react'
import { useState } from 'react'
import { SectionRight } from './headerComponents/SectionRight'
import MyContext from '../Context'
import { SectionLeft } from './headerComponents/SectionLeft'



export const Header = () => {
  
  return (

    <form className='grid grid-cols-2 bg-[#515050] gap-10 h-[40vh] justify-center px-28 items-center w-full'>

        <SectionRight />
        <SectionLeft />

    </form>
  )
}
