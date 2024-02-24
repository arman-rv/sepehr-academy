import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SuccessLogin from "./SuccessLogin";

const NewLogin = () => {
  const [steps, setSteps] = useState(0);
  return (
    <div className=" mx-auto py-14 w-screen   bg-gradient-to-b  from-primary dark:from-teal-800  border">
      <div className="w-9/12  pb-14 mx-auto mt-8 bg-white dark:bg-slate-600 dark:text-stone-200 shadow-2xl rounded-2xl">
        <div className="w-2/3 mx-auto"></div>

        <div className="flex max-lg:justify-center">
          <div className="w-1/2 max-lg:w-[90%] max-sm:w-[100%]">
            {steps === 0 && <LoginForm steps={steps} setSteps={setSteps} />}
            {steps === 1 && <SuccessLogin />}
          </div>

          <div className="w-1/2 max-lg:hidden">
            <img src="./login.png" className="h-80 mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLogin;
