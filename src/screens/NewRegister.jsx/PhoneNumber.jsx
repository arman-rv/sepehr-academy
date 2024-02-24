import React from 'react'
import { Input } from "antd";
import { Formik, useFormik , ErrorMessage  } from 'formik';
import * as yup from 'yup'
import {useQuery} from 'react-query'
import http from '../../core/services/interceptor'
import { useSelector , useDispatch } from 'react-redux'
import {onPhoneNumberChange} from '../../redux/user'


const PhoneNumber = ({step , setStep}) => {
    const dispatch = useDispatch()

    const onSubmit =async (values)=>{
        dispatch(onPhoneNumberChange(values.number))

        if(step < 3){
        setStep(step+1)      
        }  

        const phone = {phoneNumber : values.number}
        
        const result = await http.post(`/Sign/SendVerifyMessage` , phone)
        return result;
       
      }


    
      const goLast = (e) =>{
        event.preventDefault()        
        if(step > 0){
          setStep(step-1)      
        }
      } 

      const validation = yup.object().shape({
        number : yup.number("لطفا عدد وارد کنید").required('لطفا این فیلد را پر کنید')
      })


  return (
    <Formik onSubmit={onSubmit} initialValues={{number : ''}} className='flex' validationSchema={validation}>
        {({values , handleSubmit , handleChange}) => (
            <form onSubmit={handleSubmit} >
                <div className=" flex items-center justify-center font-irSans sm:p-0 w-full ">
                    <div className="flex flex-col w-full p-12 max-[550px]:px-9 max-[550px]:pb-9 max-[400px]:px-6 max-xs:pb-7 text-red-500 max-[550px]:text-center max-[350px]:text-sm max-xs:text-xs max-[270px]:text-[10.5px]">
                        <p className="mb-4 whitespace-normal  sm:text-base max-[550px]:mb-6  text-black dark:text-gray-200 ">
                            شماره خود را وارد کنید
                        </p>
                        <Input
                        name='number' value={values.number} onChange={handleChange}
                        size="large  xs:default"
                        placeholder="09XXX XXX"
                        className="  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-light max-[350px]:text-sm max-xs:text-xs dark:placeholder:text-gray-500 mb-2"
                        />
                        <ErrorMessage name='number'/>
                    </div>

                </div>
                <div className='text-center flex justify-center flex-wrap gap-7 max-[550px]:flex-col items-center max-[400px]:px-6'>
                    <button type='submit' className='flex justify-center  max-[350px]:font-bold max-[350px]:text-sm max-[350px]:py-[6px] max-[400px]:w-full py-2 w-32 px-10 text-white rounded-xl bg-primary'>تایید</button>
                    <button onClick={goLast}  className='flex justify-center max-[350px]:font-bold max-[350px]:text-sm max-[350px]:py-[6px]  max-[400px]:w-full text-center py-2 px-10 text-white rounded-xl bg-secondary'>بازگشت</button>                    
                </div>

            </form>            
        )}
    </Formik>
  )
}

export default PhoneNumber