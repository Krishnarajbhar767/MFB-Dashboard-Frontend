import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Admin_User_Purchase_Filter({ setIsFilterOpen }) {
  const [amountRange, setAmountRange] = useState(0);
  const [paymentModeInput, setPaymentModeInput] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [date,setDate] = useState("")

  return (
    <div className=" fixed h-[70px]  top-[17.5vh]  left-auto right-auto z-50 w-[77%]  mx-3 mt-4 bg-gray-100 p-4 shadow-md rounded-md  flex items-center justify-between border border-gray-300">
      <div className="flex gap-x-6 items-center text-red-800 w-1/4 ">
        <p className="text-base text-gray-800 capitalize tracking-tighter">
          Amount
        </p>
        <Slider
          aria-label="amount Range"
          defaultValue={0}
          getAriaValueText={(value, idx) => setAmountRange(value)}
          valueLabelDisplay="auto"
          valueLabelFormat={(value, idx) => (
            <span className="text-black ">{value}</span>
          )}
          shiftStep={10}
          step={500}
          // marks
          min={0}
          color="#041832"
          max={25000}
          sx={{ fontSize: "10px", color: "#041832" }}
          className=" z-20 font-light text-red-800"
        />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Payment Mode</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={paymentModeInput ? paymentModeInput : "Default"}
            label={"Payment Mode "}
            onChange={(e) => setPaymentModeInput(e.target.value)}
            className="w-56 text-black"
          >
            {/* <MenuItem value="">
          <em>Default</em>
        </MenuItem> */}
            <MenuItem value={"Default"}>Default</MenuItem>
            <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
            <MenuItem value={"Debit Card"}>Debit Card</MenuItem>
            <MenuItem value={"UPI"}>UPI</MenuItem>
            <MenuItem value={"Net Banking"}>Net Banking</MenuItem>
            <MenuItem value={"Wallet"}>Wallet</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </div>

         <div className=" flex items-center justify-center pb-2  overflow-x-hidden ">
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DemoContainer 
            components={["DatePicker"]} 
            sx={{
              // Styling applied directly to the DemoContainer
              display: "flex", // Ensures the container content aligns in a flexbox layout
              justifyContent: "center", // Horizontally centers the content
              alignItems: "center", // Vertically centers the content
              height: "100%", // Ensures the container takes full height (adjust as needed)
              width: "100%", // Ensures the container takes full width (adjust as needed)
            }}
          
          >
            <DatePicker
            sx={{
              // Styling applied directly to the DemoContainer
              display: "flex", // Ensures the container content aligns in a flexbox layout
              justifyContent: "center", // Horizontally centers the content
              alignItems: "center", // Vertically centers the content
              height: "100%", // Ensures the container takes full height (adjust as needed)
              width: "80%", // Ensures the container takes full width (adjust as needed)
            }}
          

              label="Date"
              onChange={(date)=>{
                const updatedDate = date.format("DD-MM-YYYY");
                setDate(updatedDate);
              }}
              slotProps={{ textField: { size: "small" } }}

              
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Payment Status </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={paymentStatus ? paymentStatus : "Default"}
            label={"Payment Status"}
            onChange={(e) => setPaymentStatus(e.target.value)}
            className="w-56 text-black"
          >
            {/* <MenuItem value="">
          <em>Default</em>
        </MenuItem> */}
            <MenuItem value={"Default"}>Default</MenuItem>
            <MenuItem value={"Success"}>Success</MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Failed"}>Failed</MenuItem>
          </Select>
        </FormControl>
      </div>

   
    </div>
  );
}

export default Admin_User_Purchase_Filter;
