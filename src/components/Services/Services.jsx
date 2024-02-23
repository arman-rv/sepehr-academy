import React, { useState } from 'react'
import Service from './Service'

const Services = () => {
    const [servicesList , setServicesList] = useState([
        {name:'مشاوره' ,pic:'k1.png' , desc:'ورم ایپسوم متن  صنعت چاپ'},
        {name:'مشاوره' ,pic:'k2.png' , desc:'ورم ایپسوم متن  صنعت چاپ'},
        {name:'مشاوره' ,pic:'k3.png' , desc:'ورم ایپسوم متن  صنعت چاپ'},
        {name:'مشاوره' ,pic:'k4.png' , desc:'ورم ایپسوم متن  صنعت چاپ'},
    ])
  return (

    <>
        {servicesList.map((item , index)=>{
            return(
                <Service key={index} name={item.name} pic={item.pic} desc={item.desc}/>
            )
        })}
    </>
  )
}

export default Services