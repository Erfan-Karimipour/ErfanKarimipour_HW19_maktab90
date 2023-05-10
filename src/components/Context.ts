import {createContext} from 'react'

interface myContextTypes {
  name        : string,
  producer    : string,
  genre       : string,
  year        : number,
  description : string,
}

const MyContext = createContext<myContextTypes>();

export default MyContext;

