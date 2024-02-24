import React from 'react'
import { useState } from 'react'


const Steps = ({step}) => {
const [cyrcleDesig, setCyrcleDesig] = useState({
    befor : 'h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300',
    do : 'h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-yellow-300',    
    after : 'h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-green-500'
  })

const [firstCyrcle, setFirstCyrcle] = useState([
    ' bg-yellow-300', 
    ' bg-green-500',
    'bg-green-500',
    'bg-green-500',
])  

const [secondCyrcle, setSecondCyrcle] = useState([
    'bg-gray-300',    
    'bg-yellow-300', 
    ' bg-green-500',
    ' bg-green-500',
]) 

const [thirdCyrcle, setThirdCyrcle] = useState([
    'bg-gray-300',  
    'bg-gray-300',  
    'bg-yellow-300',
    ' bg-green-500',     
]) 

const [lastCyrcle, setLastCyrcle] = useState([
    'bg-gray-300',  
    'bg-gray-300',  
    'bg-gray-300',  
    'bg-yellow-300', 
]) 
  

  const [lineDesign , setLineDesign] = useState({
    befor : 'border-2 mt-4 border-gray-300 bg-gray-300 h-1 w-full',
    after : 'border-2 mt-4 border-green-500 bg-green-500 h-1 w-full'
  })

  const [firstLine , setFirstLine] = useState([
    'border-gray-300 bg-gray-300',
    'border-green-500 bg-green-500',
    'border-green-500 bg-green-500',
    'border-green-500 bg-green-500',
  ])

  const [secondtLine , setSecondLine] = useState([
    'border-gray-300 bg-gray-300',
    'border-gray-300 bg-gray-300',
    'border-green-500 bg-green-500',
    'border-green-500 bg-green-500',
  ]) 
  
  const [thirdtLine , setThirdLine] = useState([
    'border-gray-300 bg-gray-300',
    'border-gray-300 bg-gray-300',
    'border-gray-300 bg-gray-300',
    'border-green-500 bg-green-500',
  ])   

  return (
    <ul className='flex justify-items-center pt-8 lg:pb-6 mx-auto mt-12 gap-2 max-[550px]:flex-col max-[550px]:items-center max-[550px]:pt-0 max-[550px]:mt-8 max-[400px]:gap-1 max-[400px]:mt-12' style={{direction : 'ltr'}}>
        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex items-center justify-center rounded-full bg-gray-300 ${firstCyrcle[step]}`}>
            1
        </li>
        <li className={`max-[350px]:h-5 max-[350px]:border-[1.5px] max-[550px]:w-0 max-[550px]:h-8 max-[550px]:mt-0 border-2 mt-4 h-1 w-full ${firstLine[step]}`}></li>

        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300 ${secondCyrcle[step]}`}>
            2
        </li>
        <li className={`max-[350px]:h-5 max-[350px]:border-[1.5px] max-[550px]:w-0 max-[550px]:h-8 max-[550px]:mt-0 border-2 mt-4 h-1 w-full ${secondtLine[step]} `}></li> 

        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300 ${thirdCyrcle[step]}`}>
            3
        </li>
        <li className={`max-[350px]:h-5 max-[350px]:border-[1.5px]  max-[550px]:w-0 max-[550px]:h-8 max-[550px]:mt-0 border-2 mt-4  h-1 w-full ${thirdtLine[step]}`}></li> 

        <li className={`max-[350px]:p-[14px] max-[350px]:h-0 max-[350px]:w-0 h-8 w-8 p-4 flex  items-center justify-center rounded-full bg-gray-300 ${lastCyrcle[step]}`}>
            4
        </li>        
    </ul>
  )
}

export default Steps