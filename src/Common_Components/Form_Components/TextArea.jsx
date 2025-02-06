import React from "react";

function TextArea({
    label,
    placeholder,
    type,
    register = () => {},
    inputName = "",
    required = false,
    error = null,
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
            <textarea
                {...register(inputName, { required: required })}
                id="label"
                type={type}
                className="border-gray-200 border rounded-md px-2  font-light text-gray-800 outline-none focus:ring-1 ring-blue-600 min-h-[30px] max-h-[60px] py-1 overflow-hidden"
                placeholder={error ? "Required" : placeholder}
            />
        </div>
    );
}

export default TextArea;
