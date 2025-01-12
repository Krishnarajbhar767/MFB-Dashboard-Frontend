import React from "react";
import { PiStudentFill } from "react-icons/pi";

function Admin_Total_Student_Tabular_Data_Card() {
  return (
    <div className="h-fit flex w-full p-4 justify-between ">
      <div 
      
      className="Admin_Total_Student_Tabular_Data_Card total h-20 w-80  rounded-md flex items-center gap-4 px-4 capitalize">
        <span className="text-4xl text-gray-600">
          <PiStudentFill />
        </span>
        <div >
                <p className=" text-gray-600 tracking-tight text-sm font-medium">Total Student</p>
                <p className=" text-lg font-semibold text-gray-900">9273</p>
        </div>
      </div>
      <div 
      
      className="Admin_Total_Student_Tabular_Data_Card total h-20 w-80  rounded-md flex items-center gap-4 px-4 capitalize">
        <span className="text-4xl text-gray-600">
          <PiStudentFill />
        </span>
        <div >
                <p className=" text-gray-600 tracking-tight text-sm font-medium">Total Student</p>
                <p className=" text-lg font-semibold text-gray-900">9273</p>
        </div>
      </div>
      <div 
      
      className="Admin_Total_Student_Tabular_Data_Card total h-20 w-80  rounded-md flex items-center gap-4 px-4 capitalize">
        <span className="text-4xl text-gray-600">
          <PiStudentFill />
        </span>
        <div >
                <p className=" text-gray-600 tracking-tight text-sm font-medium">Total Student</p>
                <p className=" text-lg font-semibold text-gray-900">9273</p>
        </div>
      </div>

      
      {/* <div className="Admin_Total_Student_Tabular_Data_Card">total student</div> */}
    </div>
  );
}

export default Admin_Total_Student_Tabular_Data_Card;
