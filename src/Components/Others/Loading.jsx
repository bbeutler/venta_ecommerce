import React from 'react'

const Loading = ({children}) => {
  return (
    <div className="h-full p-24 mt-24 text-orange-900 flex justify-center ">

    <p 
    className=" text-base text-center lg:w-1/4 w-full  ">
{children}
    </p>
  </div>
  )
}

export default Loading