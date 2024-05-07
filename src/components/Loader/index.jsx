import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <BounceLoader color="#F14119" />
    </div>
  );
};

export default Loader;
