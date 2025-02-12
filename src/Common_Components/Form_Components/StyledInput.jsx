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
    bgColor,
    textColor,
    outlineColor,
    borderColor,
}) {
    return (
        <input
            style={{
                backgroundColor: bgColor ? bgColor : "#1f2937",
                color: textColor ? textColor : "#9ca3af ",
                borderColor: borderColor ? borderColor : "#4b5563",
            }}
            type={type}
            className={`pl-10 p-3 w-full rounded-md  focus:border-blue-500 border outline-none font-normal `}
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
