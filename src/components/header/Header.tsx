import React, { useEffect } from 'react'
import { useState } from 'react'
import { SectionRight } from './headerComponents/SectionRight'
import MyContext from '../Context'
import { SectionLeft } from './headerComponents/SectionLeft'



export const Header = () => {
  
  return (

    <form className='grid md:grid-cols-2 bg-[#515050] gap-10 h-[50vh] justify-center lg:px-28 md:h-[40vh] grid-cols-1 items-center w-full'>

        <SectionRight />
        <SectionLeft />

    </form>
  )
}
