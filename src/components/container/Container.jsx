import React from 'react'

export const Container = ({title, description, children}) => {
  return (
    <div className='container w-full flex flex-col m-auto bg-white rounded-lg mt-5 mb-5 p-10 border-2 border-[#ccc] shadow-md md:w-1/2 lg:w-1/2'>
        <h2 className='text-2xl font-bold text-center mb-5 underline decoration-wavy'>{title}</h2>
        <p className='text-center'>{description}</p>
        {children}
    </div>
  )
}

export default Container