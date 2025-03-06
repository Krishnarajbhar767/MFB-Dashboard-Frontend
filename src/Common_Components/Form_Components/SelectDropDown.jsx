import React from "react";

function SelectDropDown({
    selectName,
    selectId,
    label,
    options,
    register,
    error,
    inputName,
    required,
    defaultOption,
}) {
    return (
        <div className={`flex flex-col gap-1`}>
            {label && (
                <label
                    htmlFor={selectName}
                    className={`text-sm font-normal  ${
                        error ? "text-red-500" : "text-gray-900"
                    }`}
                >
                    {label}
                </label>
            )}
            <select
                name={selectName}
                id={selectId}
                {...register(inputName, {
                    required: required ? required : false,
                })}
                className="text-sm font-normal px-4 py-1
                border border-gray-200 focus:border-blue-500
                "
            >
                {defaultOption && (
                    <option value={""} selected disabled>
                        {defaultOption}
                    </option>
                )}
                {options?.map((option, idx) => (
                    <option
                        value={option?.value}
                        className="text-[13px] font-normal capitalize"
                    >
                        {option?.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectDropDown;
