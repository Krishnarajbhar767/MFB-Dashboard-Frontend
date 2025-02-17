import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* 
  CustomInput Component
  ---------------------
  A reusable input field component for text, email, date, etc.
  Props:
    - label: The text label for the input.
    - type: The type attribute for the input element (default is "text").
    - registerOptions: The object returned from react-hook-form's register function.
    - error: Validation error object (if any) for the input.
    - disabled: Boolean to control whether the input is editable.
    - ...rest: Any other additional props (like placeholder, etc.).
*/

export const AdminCustomInput = React.memo(function AdminCustomInput({
    label,
    type = "text",
    registerOptions,
    error,
    disabled,
    ...rest
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                // Spread the registration props from react-hook-form for handling value, onChange, etc.
                {...registerOptions}
                disabled={disabled}
                {...rest}
                className="mt-1 block w-full rounded-md border border-gray-200 outline-none shadow-sm 
                   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2  text-gray-600 "
            />
            {/* If there's a validation error, display the error message */}
            {error && (
                <p className="mt-1 text-sm text-red-600">{error.message}</p>
            )}
        </div>
    );
});

/* 
  CustomTextarea Component
  ------------------------
  A reusable textarea component with label, styling, and error handling.
  Props:
    - label: The text label for the textarea.
    - registerOptions: The registration object from react-hook-form.
    - error: Validation error object (if any).
    - disabled: Boolean to control whether the textarea is editable.
    - rows: Number of visible text lines (default is 3).
    - ...rest: Any other additional props.
*/
export const AdminCustomTextarea = React.memo(function AdminCustomTextarea({
    label,
    registerOptions,
    error,
    disabled,
    rows = 3,
    ...rest
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                {...registerOptions}
                disabled={disabled}
                rows={rows}
                {...rest}
                className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm 
                   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 outline-none text-gray-600"
            ></textarea>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error.message}</p>
            )}
        </div>
    );
});

/* 
  CustomSelect Component
  ----------------------
  A reusable select dropdown component with label, styling, and error handling.
  Props:
    - label: The text label for the select.
    - registerOptions: The registration object from react-hook-form.
    - error: Validation error object (if any).
    - disabled: Boolean to control whether the select is editable.
    - options: An array of option objects in the form [{ value: "", label: "" }, ...].
    - ...rest: Any other additional props.
*/
export const AdminCustomSelect = React.memo(function AdminCustomSelect({
    label,
    registerOptions,
    error,
    disabled,
    options,
    ...rest
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                {...registerOptions}
                disabled={disabled}
                {...rest}
                className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm 
                   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50  px-3 py-2"
            >
                {options?.map((option) => (
                    <option
                        key={option?.value}
                        value={option?.value}
                        id={option?.id}
                    >
                        {option?.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-red-600">{error.message}</p>
            )}
        </div>
    );
});

export const AdminCustomToggale = ({ isChecked, setChecked }) => {
    return (
        <div onClick={() => setChecked(!isChecked)}>
            <label class="inline-flex items-center me-5 cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    defaultChecked={isChecked}
                />
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
            </label>
        </div>
    );
};
