import React from "react";
import IconBtn from "../IconBtn";

function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed  top-1/2 left-[53%] -translate-x-[50%] -translate-y-[50%] h-fit p-4 border lg:min-w-[200px] lg:max-w-[600px] z-40 w-fit bg-gray-200 text-gray-800 capitalize rounded-md shadow-2xl">
      <div className="space-y-1">
        <p className="text-base">{modalData?.text1}</p>
        <p className="text-sm font-normal">{modalData?.text2}</p>
        <div className="space-x-3 space-y-2">
          <button onClick={modalData?.btn1Handler}>
            <IconBtn  color="#118B50">
              {modalData.btn1Text}
            </IconBtn>
          </button>
          <button onClick={modalData?.btn2Handler}>
            <IconBtn color={"#131010"}>{
              modalData.btn2Text
              }</IconBtn>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
