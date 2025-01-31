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
        <input
            type={type}
            className={` pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none font-normal `}
            placeholder={placeholder}
            {...register(inputName, {
                required: required,
                ...validation,
            })}
            accept={accept ? accept : "text"}
        />
    );
}

export default StyledInput;
