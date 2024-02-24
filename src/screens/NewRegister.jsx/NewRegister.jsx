import React from "react";
import { useState } from "react";
import Steps from "./steps";
import PhoneNumber from "./PhoneNumber";
import RegisterCode from "./RegisterCode";
import InfoRegister from "./InfoRegister";
import LastStep from "./LastStep";

const NewRegister = () => {
  const [step, setStep] = useState(0);
  return (
    <div className=" mx-auto py-14 w-screen   bg-gradient-to-b  from-primary dark:from-teal-800  border">
      <div className="w-9/12 max-sm:w-10/12 pb-14 mx-auto mt-12 bg-white dark:bg-slate-600 dark:text-stone-200 shadow-2xl rounded-2xl max-[550px]:pb-8">
        <div className="w-2/3 mx-auto max-[550px]:hidden">
          <Steps step={step} setStep={setStep} />
        </div>

        <div className="flex max-lg:justify-center">
          <div className="w-1/2 max-lg:w-[90%]  max-[400px]:w-[75%]">
            {step === 0 && <PhoneNumber step={step} setStep={setStep} />}
            {step === 1 && <RegisterCode step={step} setStep={setStep} />}
            {step === 2 && <InfoRegister step={step} setStep={setStep} />}
            {step === 3 && <LastStep step={step} setStep={setStep} />}
          </div>

          <div className="w-1/2 max-lg:hidden">
            <img src="./registerDark.svg" className="h-80 mx-auto" alt="" />
          </div>

          <div className="w-2/3 mx-auto hidden max-[550px]:block  max-[550px]:w-1/3 max-[400px]:w-[25%]">
            <Steps step={step} setStep={setStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRegister;
