import React from "react";

function ContactUsInput({
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
            className={` pl-10 p-2 w-full rounded-md text-sm text-gray-600  border border-gray-200 shadow-sm focus:border-blue-500 outline-none font-normal `}
            placeholder={placeholder}
            {...register(inputName, {
                required: required,
                ...validation,
            })}
            accept={accept ? accept : "text"}
        />
    );
}

export default ContactUsInput;
