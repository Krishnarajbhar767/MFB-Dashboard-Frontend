import React from "react";

function StyledInput({
    label,
    placeholder,
    type,
    handler = () => {},
    register = () => {},
    inputName = "",
    required = false,
    error = null,
    accept = null,
    validation = null,
}) {
    return (
        <div
            className={`flex flex-col gap-1 text-[13px] text-gray-800 font-medium ${
                error ? "text-red-500" : ""
            }`}
        >
            <label htmlFor={label} className=" ">
                {label}
            </label>
            <input
                id="label"
                type={type}
                className={` rounded-md px-2 py-2  border border-[#B263DC]  text-gray-600 outline-none text-xs font-normal  `}
                placeholder={error ? "This field is required" : placeholder}
                {...register(
                    inputName,
                    validation ? validation : { required: required }
                )}
                accept={accept ? accept : "text"}
            />
        </div>
    );
}

export default StyledInput;
