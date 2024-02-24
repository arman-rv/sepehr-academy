import React, { useState } from 'react'
import SingleNewsAndArticle from '../common/SingleNewsAndArticle/SingleNewsAndArticle'
import http from '../../core/services/interceptor'
import {useQuery} from 'react-query'


const Article = () => {
    const [newsList , setNewsList] = useState([
        { pic:'./news1.jpg' , desc:'جاوا اسکریپت چیست؟ ما در این مقاله، قصد داریم یکی از محبوب‌ترین زبان‌های این حوزه یعنی جاوا اسکریپت را به طور کامل بر اساس بروزترین نسخه این زبان به شما معرفی کنیم.' },
        { pic:'./news2.jpg' , desc:"اگر دنبال یادگیری اصول برنامه نویسی هستید و نمیدونید این اصول رو از کجا و چطور فرا بگیرید به نظرم این مقاله، بهتون کمک می کند تا در این حوزه موفق شوید. با ما در این  سفر زیبا همراه باشید." },
        { pic:'./news3.jpg' , desc:"هوش مصنوعی یکی از حوزه‌های پیشرفته و جذاب علوم کامپیوتر است که در دهه‌های اخیر بسیار مورد توجه قرار گرفته است.در این بخش، مقاله کوتاه در مورد هوش مصنوعی خواهیم داشت و به طور خلاصه به معرفی و بررسی هوش مصنوعی خواهیم پرداخت." },
    ])

    const getArticleList = async () =>{
        const result = await http.get('/News')
        return result;
  
    }

    const {data , status} = useQuery('articleQuery' , getArticleList)

   

  return (
    <>
        {
            newsList.map((item , index)=>{
                return(
                    <SingleNewsAndArticle key={index} pic={item.pic} desc={item.desc}/>                
                )
            }  
        )}

    </>
  )
}

export default Article