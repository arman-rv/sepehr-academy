import React from "react";
import { Input } from "antd";
import { Formik, useFormik, ErrorMessage } from "formik";
import * as yup from "yup";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useSelector, useDispatch, } from "react-redux";
import { onTokenChange, onPhoneNumberChange, onIdChange } from "../../redux/user";
import { useQuery } from "react-query";
import http from "../../core/services/interceptor";
import {
  setItem,
  getItem,
  removeItem,
  clearStorage,
} from "../../core/services/common/storage.services";

const LoginForm = ({ steps, setSteps }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    const person = {
      phoneOrGmail: values.email,
      password: values.pass,
      rememberMe: values.check,
    };

    const result = await http.post(`/Sign/Login`, person);

    setItem("token", result.token);

    if (result.success === true) {
      dispatch(onTokenChange(result.token));
      dispatch(onPhoneNumberChange(result.phoneNumber));
      dispatch(onIdChange(result.id));
    }
    {
      result.success === true && setSteps(1);
    }
    {
      result.success === false && alert("نام کاربری یا پسورد اشتباه است");
    }
  };

  // clearStorage()
  // dispatch(onTokenChange(null))

  // const token = getItem("token") ||  user.token ? getItem("token")  || user.token : null;

  ///const z=  getItem('token')

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ email: "", pass: "", check: false }}
      className="flex">
      {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <div className="  items-center justify-center font-irSans sm:p-0 w-full  xs:px-2 xs:pt-3">
            <div className="flex flex-col w-full p-8 pb-0">
              <p className="mb-4 pr-2 whitespace-nowrap  sm:text-base ">
                ایمیل یا شماره تلفن
              </p>
              <Input
                name="email"
                onChange={handleChange}
                size="large  xs:default"
                placeholder="example@gmail.com"
                className="dark:placeholder:text-gray-400 border border-gray-400 rounded-md placeholder:font-sans placeholder:font-medium"
              />
              <ErrorMessage name="email" />
            </div>

            <div className="flex flex-col w-full p-8 pb-0">
              <p className="mb-4 pr-2  whitespace-nowrap  sm:text-base ">
                پسورد
              </p>
              <Input.Password
                name="pass"
                onChange={handleChange}
                size="large  xs:default"
                placeholder="  xxxxxxxx"
                className="dark:placeholder:text-gray-400 w-full flex-row-reverse  border border-gray-400 rounded-md placeholder:font-sans placeholder:font-medium placeholder:align-middle "
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <ErrorMessage name="pass" />
            </div>

            <div className="  w-full p-6 pr-9">
              <input
                name="check"
                id="check"
                value={values.check}
                type="checkbox"
                onChange={handleChange}
              />
              <label htmlFor="check" className="mr-2">
                مرا به خاطر بسپار
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-10 mx-4 text-white rounded-xl bg-primary hover:bg-secondary">
              تایید
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
