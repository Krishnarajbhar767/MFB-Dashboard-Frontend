import React from "react";
import Admin_Active_Student from "./Admin_Active_Student_Components/Admin_Active_Student";
import Admin_Total_Student_Tabular_Data_Card from "./Admin_User_Management_Components/Sub_Components/Admin_Total_Student_Tabular_Data_Card";

function Admin_Dashboard() {
  return (
    <div className="w-full bg-gray-200 h-full overflow-scroll scroller rounded-lg p-5 flex flex-col gap-5 font-semibold ">
      <h2>Dashboard Navbar</h2>
      <Admin_Total_Student_Tabular_Data_Card/>
      <div className="flex flex-row gap-5 p-5 bg-gray-500 rounded-lg h-fit w-full">
        <div className="flex flex-col gap-2 w-3/4 ">
          <div className="className w-full h-[100vh] bg-white text-black p-5 font-semibold rounded-lg ">
            Graph
          </div>

          <div className="className w-full flex flex-row items-center justify-around h-[80px] bg-white text-black  py-2 font-semibold rounded-lg ">
            {/* Navbar  */}
            <span className="w-fit flex flex-row gap-5  text-white rounded-lg h-fit px-5">
              <span className="bg-black text-white py-2 px-7 rounded-lg">
                Active Student
              </span>
              {/* <span className="bg-black text-white py-2 px-7 rounded-lg">Teacher</span> */}
              <span className="bg-black text-white py-2 px-7 rounded-lg">
                All Data
              </span>
            </span>
          </div>

          <div className="bg-white text-black rounded-lg h-fit w-full p-5">
            {/* <Admin_Active_Student/> */}
            {/* <h2>Outler For All child Router</h2> */}

            {/* <h2>Total Transactions</h2> */}

            {/* Active Students */}
            <Admin_Active_Student />
            {/* <h2>All Active Students Status </h2> */}

            {/* Courses */}
            {/* <h2>All Our Courses List </h2> */}
          </div>
        </div>

        <div className=" flex flex-row gap-5 p-5 bg-white text-black rounded-lg flex-1 h-full ">
          Calender data Filter or Sort by Date
        </div>
      </div>
      {/* PlatForm analytics */}
      <h2>PlatForm Analytics Graph For all Data</h2>
    </div>
  );
}

export default Admin_Dashboard;
