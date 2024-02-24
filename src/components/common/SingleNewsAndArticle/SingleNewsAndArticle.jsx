import React from 'react'
import { motion } from 'framer-motion'

const SingleNewsAndArticle = ({pic , desc}) => {
  return (
    <motion.div
    initial={{ x : 50 , opacity: 0  }}
    whileInView={{ x : 0 , opacity: 1 }}
    transition={{delay:0.3}}
    className='border shadow-2xl relative gap-3 w-full mt-3 px-4 rounded-lg flex h-40 max-[880px]:h-46 max-[670px]:h-56 max-[550px]:h-64 max-[500px]:flex-col  mx-auto max-[500px]:h-[380px] max-[500px]:gap-0 max-[400px]:h-[360px]'>
        <img className='m-4 mx-auto max-[670px]:w-[50%] max-[500px]:w-full rounded-sm' src={pic}/>
        <p className='pl-4 pr-4 text-sm mt-6 max-[500px]:mt-2'>
            {desc}
        <span><img className='absolute w-8 mx-auto left-7 bottom-5 max-[880px]:bottom-3 max-[880px]:left-5 cursor-pointer dark:filter dark:invert-[100%]' src='./felesh.png'/></span>
        </p>
    </motion.div>
  )
}

export default SingleNewsAndArticle