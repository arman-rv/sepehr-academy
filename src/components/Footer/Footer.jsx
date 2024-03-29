import { Input, Space } from "antd";
import { Button } from "antd/es/radio";
import React from "react";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import MapLeafLet from "../MapLeafLet/MapLeafLet";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <div className="w-[100%] bg-primary dark:bg-teal-800 p-10 mt-20 box-border" style={{borderTopLeftRadius: "5000px 200px", borderTopRightRadius: "5000px 400px"}}></div>
      <div className="flex items-center w-[100%] bg-primary dark:bg-teal-800 pb-10  font-irSans text-white text-sm box-border">
        <div className="container mx-auto flex flex-col gap-x-36 md:flex-row justify-center
        max-xl:gap-x-20 w-[clamp(100px,90%,1200px)] max-sm:w-full">
          <div className="flex flex-col mr-16 md:mr-0 ">
            <span className="indent-2 mb-4 cursor-default text-base md:text-lg">
              لینکها
            </span>
            <ul className="flex flex-col gap-y-3 md:gap-y-4 list-disc">
              <li className="hover:text-secondary transition-all cursor-pointer text-sm md:text-base">
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li className="hover:text-secondary transition-all cursor-pointer font-medium">
                آموزش
              </li>
              <li className="hover:text-secondary transition-all cursor-pointer font-medium">
                مالی
              </li>
              <li className="hover:text-secondary transition-all cursor-pointer font-medium">
                خدمات
              </li>
            </ul>
          </div>
          <div className="flex flex-col my-10 md:my-0 w-80% mr-12 md:mr-0" >
            <span className="indent-4 mb-4 cursor-default text-base md:text-lg">
              ارتباط با ما
            </span>
            <ul className="flex flex-col gap-y-3 md:gap-y-4">
              <li className="hover:text-secondary transition-all cursor-default font-medium">
                <PhoneOutlined />
                <span className="ms-2">011-33322555</span>
              </li>
              <li className="hover:text-secondary transition-all cursor-default font-medium">
                <MailOutlined />
                <span className="ms-2">bahr@bahr-academy.org</span>
              </li>
              <li className="hover:text-secondary transition-all cursor-default font-medium">
                <HomeOutlined />
                <span className="ms-2">
                  آدرس: ساری، میدان خزر، جاده فرح آباد، ساختمان سپهر 
                </span>
              </li>
              <li className="flex flex-col pt-5">
                <span className="md:text-xs text-slate-200 dark:text-stone-300 text-xs cursor-default">
                  برای دریافت خبرنامه، ایمیل خود را ثبت کنید:
                </span>
                <Space.Compact className="w-[80%] mt-2">
                  <Input placeholder="example@gmail.com" className="placeholder:text-stone-400" />
                  <Button
                    className="bg-secondary font-irSans text-white hover:text-white hover:bg-primary"
                    type="secondary">
                    ارسال
                  </Button>
                </Space.Compact>
              </li>
            </ul>
          </div>
          <div className="w-60 h-44 sm:w-[500px] sm:h-60 mx-auto md:mx-0 bg-slate-200 rounded-lg overflow-hidden font-irSans max-sm:w-full"  >
            <MapLeafLet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
