import React from 'react'
import { Dna } from 'react-loader-spinner'
const Loader = () => {
  return (
   <div className='grid place-items-center select-none'>
     <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
   </div>
  )
}

export default Loader
