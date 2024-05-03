import React from "react";
import One from "./one/one";
import Two from "./two/two";
import Three from "./three/three";

const Stepper = () => {
  return (
    <div className="a w-100 flex justify-center">
      <div className="flex flex-col gap-10">
        <One />
        <Two />
        <Three />
      </div>
    </div>
  );
};

export default Stepper;
