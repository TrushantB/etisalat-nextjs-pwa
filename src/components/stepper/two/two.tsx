import React from "react";

const Two = ({setStep}:any) => {
  return (
    <div className="" onClick={() => setStep(3)}>
      <div className="text-white flex justify-center gap-3 p-5 py-10  bg-gradient-to-r from-[#0A0A0A] to-[#E00800] ">
        <button>
          <p className="text-3xl">Bussiness</p>
        </button>
        <button>
          <p className="text-3xl">Consumer</p>
        </button>
      </div>
    </div>
  );
};

export default Two;
