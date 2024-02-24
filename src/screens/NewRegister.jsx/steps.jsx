import React from 'react'
import { useState } from 'react'


const Steps = ({step}) => {
const [cyrcleDesig, setCyrcleDesig] = useState({
    befor : 'h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300',
    do : 'h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-secondary',    
    after : 'h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-primary'
  })

const [firstCyrcle, setFirstCyrcle] = useState([
    ' bg-secondary', 
    ' bg-primary',
    'bg-primary',
    'bg-primary',
])  

const [secondCyrcle, setSecondCyrcle] = useState([
    'bg-gray-300',    
    'bg-secondary', 
    ' bg-primary',
    ' bg-primary',
]) 

const [thirdCyrcle, setThirdCyrcle] = useState([
    'bg-gray-300',  
    'bg-gray-300',  
    'bg-secondary',
    ' bg-primary',     
]) 

const [lastCyrcle, setLastCyrcle] = useState([
    'bg-gray-300',  
    'bg-gray-300',  
    'bg-gray-300',  
    'bg-secondary', 
]) 
  

  const [lineDesign , setLineDesign] = useState({
    befor : 'border-2 mt-4 border-gray-300 bg-gray-300 h-1 w-full',
    after : 'border-2 mt-4 border-green-500 bg-primary h-1 w-full'
  })

  const [firstLine , setFirstLine] = useState([
    'border-gray-300 bg-gray-300',
    'border-green-500 bg-primary',
    'border-green-500 bg-primary',
    'border-green-500 bg-primary',
  ])

  const [secondtLine , setSecondLine] = useState([
    'border-gray-300 bg-gray-300',
    'border-gray-300 bg-gray-300',
    'border-green-500 bg-primary',
    'border-green-500 bg-primary',
  ]) 
  
  const [thirdtLine , setThirdLine] = useState([
    'border-gray-300 bg-gray-300',
    'border-gray-300 bg-gray-300',
    'border-gray-300 bg-gray-300',
    'border-green-500 bg-primary',
  ])   

  return (
    <ul className='flex justify-items-center pt-8 lg:pb-6 mx-auto mt-12 gap-2 max-[550px]:flex-col max-[550px]:items-center max-[550px]:pt-0 max-[550px]:mt-8 max-[400px]:gap-1 max-[400px]:mt-12' style={{direction : 'ltr'}}>
        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex items-center justify-center rounded-full bg-gray-300 text-stone-700 font-semibold ${firstCyrcle[step]}`}>
            1
        </li>
        <li className={`max-[350px]:h-5 max-[350px]:border-[1.5px] max-[550px]:w-0 max-[550px]:h-8 max-[550px]:mt-0 border-2 mt-4 h-1 w-full ${firstLine[step]}`}></li>

        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300 text-stone-700 font-semibold ${secondCyrcle[step]}`}>
            2
        </li>
        <li className={`max-[350px]:h-5 max-[350px]:border-[1.5px] max-[550px]:w-0 max-[550px]:h-8 max-[550px]:mt-0 border-2 mt-4 h-1 w-full ${secondtLine[step]} `}></li> 

        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300 text-stone-700 font-semibold ${thirdCyrcle[step]}`}>
            3
        </li>
        <li className={`max-[350px]:h-5 max-[350px]:border-[1.5px]  max-[550px]:w-0 max-[550px]:h-8 max-[550px]:mt-0 border-2 mt-4  h-1 w-full ${thirdtLine[step]}`}></li> 

        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300 text-stone-700 font-semibold ${lastCyrcle[step]}`}>
            4
        </li>        
    </ul>
  )
}

export default Steps