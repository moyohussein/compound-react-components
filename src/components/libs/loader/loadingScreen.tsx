import React from "react";
import { ImSpinner2 } from "react-icons/im";

const LoadingScreen: React.FC<any> = () => {
  return (
    <div  className="w-screen h-screen flex justify-center items-center">
      <ImSpinner2 size="5rem" className="text-main-light animate-spin" />
    </div>
  );
};

export default LoadingScreen;
