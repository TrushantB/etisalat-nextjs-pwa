"use client"
import React, { useState } from "react";
import One from "./one/one";
import Two from "./two/two";
import Three from "./three/three";

const Stepper = () => {
  const [step, setStep]=useState(1);
  return (

    <div className="a w-100 flex items-center justify-center relative h-[calc(100vh-100px)]">
      <div className="absolute">
        <img
          className=" object-contain w-100 h-[600px]"
          src="images/background.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-10 absolute">
      { step === 1 && <One setStep={setStep}/>}
       { step === 2 && <Two setStep={setStep}/>}
       { step === 3 && <Three setStep={setStep}/>}
      </div>
    </div>

  );
};

export default Stepper;
