import React from "react";
import One from "./one/one";
import Two from "./two/two";
import Three from "./three/three";

const Stepper = () => {
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
        {/* <One /> */}
        {/* <Two /> */}
        <Three />
      </div>
    </div>
  );
};

export default Stepper;
