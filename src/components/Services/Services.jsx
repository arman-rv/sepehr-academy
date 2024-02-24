import React, { useState } from 'react'
import Service from './Service'

const Services = () => {
    const [servicesList , setServicesList] = useState([
        {name:'آموزش' ,pic:'k1.png' , desc:"در اینجا زیر نظر بهترین اساتید آموزش میینید"},
        {name:'مشاوره' ,pic:'k2.png' , desc:"با ثبت نام در دوره ها از مشاوره نا محدود بهره مند شوید"},
        {name:'ساخت رزومه' ,pic:'k3.png' , desc:"ساخت رزومه بعد از اتمام هر دوره بصورت اختصاصی"},
        {name:'پروژه' ,pic:'k4.png' , desc:"شرکت در پروژه های حرفه ای بعد از اتمام هر دوره"},
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