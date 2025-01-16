import React from "react";

function Input({
    label,
    placeholder,
    type,
    handler = () => {},
    register = () => {},
    inputName = "",
    required = false,
    error = null,
    accept = null,
}) {
    return (
        <div
            className={`flex flex-col gap-1 text-sm text-gray-800 font-medium ${
                error ? "text-red-500" : ""
            }`}
        >
            <label htmlFor={label} className=" ">
                {label}
            </label>
            <input
                id="label"
                type={type}
                className={`border-gray-200 border rounded-md px-2 py-1 font-light text-gray-800 outline-none focus:ring-1 ring-blue-600 `}
                placeholder={error ? "This field is required" : placeholder}
                {...register(inputName, { required: required })}
                accept={accept ? accept : "text"}
            />
        </div>
    );
}

export default Input;
