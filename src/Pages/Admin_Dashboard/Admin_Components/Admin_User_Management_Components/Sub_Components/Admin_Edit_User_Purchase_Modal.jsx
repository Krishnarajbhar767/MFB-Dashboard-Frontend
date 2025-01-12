import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import IconBtn from "../../../../../Common_Components/IconBtn";
import { MdCancel } from "react-icons/md";
import { IoSaveOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import ConfirmationModal from "../../../../../Common_Components/modal/ConfirmationModal";
import toast from "react-hot-toast";

function Admin_Edit_User_Purchase_Modal({ tableData, setTableData }) {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  useEffect(() => {
    setValue("trackingId", tableData.trackingId);
    setValue("studentName", tableData.studentName);
    setValue("email", tableData.email);
    setValue("amount", tableData.amount);
    setValue("paymentMode", tableData.paymentMode);
    setValue("status", tableData.status);
  }, []);
  // alert(JSON.stringify(tableData))

  const formHandler = async (data) => {
    console.log("Form Data", data);
    setConfirmationModal({
      text1: "Are You Sure",
      text2: "Your Data Will Be Updated",
      btn1Text: "Update",
      btn2Text: "Cancel",
      btn1Handler: async () => {
        setLoading(true);
        const loadingToastId = toast.loading("Please Wait....");
        try {
          console.log("Printing User Data From Confirmation Modal....",data)
          const updatedUserData = true; // get response from API Then UPdated New Data // get Updated Purchase Data
          if (updatedUserData) {
            // setUpdated user purchase data
            toast.success("Data Updated Successfully...");
            setConfirmationModal(null);
            setTableData(null);
          }
        } catch (error) {
          console.log("Admin Edit Purchase API Error....", error);
        } finally {
          toast.dismiss(loadingToastId);
        }
      },
      btn2Handler: () => {
        setConfirmationModal(null);
      },
    });
  };
  return (
    <div
      id="Admin_Edit_User_Purchase_Modal"
      className="capitalize fixed w-[40vw] h-[90vh] bg-gray-100 border-gray-400 z-30 border rounded-lg  bottom-10 left-[33%] right-auto p-4"
    >
      <p
        className="text-gray-900 text-2xl font-extrabold  absolute right-6 cursor-pointer"
        onClick={() => setTableData(null)}
      >
        <RxCross2 />
      </p>
      <h1 className="text-xl mb-2 text-gray-900 font-normal ">
        Update Payment Information
      </h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(formHandler)}
      >
        <div className="flex flex-col">
          <label htmlFor="trackingId">Tracking Id</label>
          <input type="text" id="trackingId" defaultValue={tableData?.trackingId} 
          {...register("trackingId")}
          disabled
          />
          {/* <span className='text-xs text-red-600 mt-1'>Error djkdsjkhdhjsdjsjkhs</span> */}
        </div>
        <div className="flex flex-col">
          <label htmlFor="studentName">Full Name </label>
          <input
            type="text"
            id="studentName"
            defaultValue={tableData.studentName}
            {...register("studentName", { required: true })}
          />
          {errors.studentName && (
            <span className="text-xs text-red-600 mt-1">
              Full Name Is Required *
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            defaultValue={tableData?.email}
            {...register("email", { required: true })}
            disabled
          />
          {errors.email && (
            <span className="text-xs text-red-600 mt-1">
              Email Is Required *
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            defaultValue={tableData?.amount}
            {...register("amount", { required: true })}
            disabled
          />

          {errors.amount && (
            <span className="text-xs text-red-600 mt-1">
              Amount Is Required *
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="paymentMode">Payment Mode</label>
          <select
            defaultValue={tableData.paymentMode}
            {...register("paymentMode", { required: true })}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
            <option value="Wallet">Wallet</option>
            <option value="Net Banking">Other</option>
          </select>
          {errors.paymentMode && (
            <span className="text-xs text-red-600 mt-1">
              Payment Mode Is Required *
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="status">Payment Status</label>
          <select
            defaultValue={tableData.status}
            {...register("status", { required: true })}
          >
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
          {errors.status && (
            <span className="text-xs text-red-600 mt-1">
              Payement Status Is Required *
            </span>
          )}
        </div>

        <div className="flex gap-4 pt-2">
          <button type="submit">
            <span>
              <IconBtn color={"#000f"}>
                <IoSaveOutline />
                Save Changes
              </IconBtn>
            </span>
          </button>
          <span onClick={() => setTableData(null)}>
            <IconBtn color={"#118B50"}>
              <MdCancel /> Cancel
            </IconBtn>
          </span>
        </div>
      </form>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
}

export default Admin_Edit_User_Purchase_Modal;
