import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Alert = ({children, error}) => {
  return (
   <AnimatePresence >

<motion.div
    initial={{
      y: "-5em",
    }}

    animate ={{
      y: 0
    }}

    exit ={{
      y: "-5em",
    }}

     className={`fixed top-0 left-0 z-[50000] w-full h-12 ${error ? "bg-red-500" : "bg-green-500"} flex justify-center items-center`}
     >
        <p className='text-xs lg:text-sm'>
            {children}
        </p>
    </motion.div>
   </AnimatePresence>
  )
}

export default Alert