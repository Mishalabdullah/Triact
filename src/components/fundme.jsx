import React from "react";
import Donatebutton from "./button";
import InputField from "./inputfield";
function Fundme() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="border-2 border-stone-900 rounded-md overflow-hidden w-full m-2 p-10 max-w-2xl">
        <div>
          <h1 className="text-lg md:text-xl mb-2 md:mb-3 pt-15 font-semibold text-center">
            Send Me Some ETH!!
          </h1>
        </div>
        <div className=" text-center">
          <InputField />
          <Donatebutton />
        </div>
      </div>
    </div>
  );
}
export default Fundme;
