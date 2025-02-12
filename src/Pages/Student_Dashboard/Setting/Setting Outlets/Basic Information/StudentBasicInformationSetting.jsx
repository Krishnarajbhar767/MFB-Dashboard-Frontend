import { useState } from "react";
import {
    StudentCustomInput,
    StudentCustomSelect,
    StudentCustomTextarea,
} from "../../CustomInputs/StudentCustomInput";
import { useForm } from "react-hook-form";

export default function StudentBasicInformationSetting() {
    // State to track whether the form is in editing mode.
    const [isEditing, setIsEditing] = useState(false);
    // State to hold the profile image URL or data URI.
    const [profileImage, setProfileImage] = useState(
        "/placeholder.svg?height=100&width=100"
    );

    // Set up react-hook-form with default values and form validation.
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "John",
            lastName: "Doe",
            gender: "male",
            dob: "1990-01-01",
            email: "john.doe@example.com",
            address: "123 Main St, City, Country",
        },
    });

    // Function to handle form submission. The "data" object contains all form values.
    const onSubmit = (data) => {
        console.log(data);
        // Once submitted, exit editing mode.
        setIsEditing(false);
    };

    // Function to handle changes to the profile image file input.
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a FileReader to convert the image file to a data URI.
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className=" w-full bg-white ">
            {/* Header section with the title and edit toggle button */}
            <h1 className="text-gray-900 text-lg font-medium  py-2 bg-green-100 pl-4">
                Profile
            </h1>
            <div className="px-4 mt-2 py-4">
                <div className="flex justify-end items-center mb-6">
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 "
                    >
                        {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                </div>

                {/* Form managed by react-hook-form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Profile image section */}
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src={profileImage || "/placeholder.svg"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover mb-2 border"
                        />
                        {/* Show file input only in editing mode */}
                        {isEditing && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                           file:rounded-full file:border-0 file:text-sm file:font-semibold 
                           file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        )}
                    </div>

                    {/* Grid for first name and last name inputs */}
                    <div className="grid grid-cols-2 gap-4">
                        <StudentCustomInput
                            label="First Name"
                            type="text"
                            registerOptions={register("firstName", {
                                required: "First name is required",
                            })}
                            error={errors.firstName}
                            disabled={!isEditing}
                        />
                        <StudentCustomInput
                            label="Last Name"
                            type="text"
                            registerOptions={register("lastName", {
                                required: "Last name is required",
                            })}
                            error={errors.lastName}
                            disabled={!isEditing}
                        />
                    </div>

                    {/* Gender selection using the CustomSelect component */}
                    <StudentCustomSelect
                        label="Gender"
                        registerOptions={register("gender")}
                        error={errors.gender}
                        disabled={!isEditing}
                        options={[
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                            { value: "other", label: "Other" },
                        ]}
                    />

                    {/* Date of Birth input */}
                    <StudentCustomInput
                        label="Date of Birth"
                        type="date"
                        registerOptions={register("dob", {
                            required: "Date of birth is required",
                        })}
                        error={errors.dob}
                        disabled={!isEditing}
                    />

                    {/* Email input */}
                    <StudentCustomInput
                        label="Email"
                        type="email"
                        registerOptions={register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        error={errors.email}
                        disabled={!isEditing}
                    />

                    {/* Address textarea */}
                    <StudentCustomTextarea
                        label="Address"
                        registerOptions={register("address", {
                            required: "Address is required",
                        })}
                        error={errors.address}
                        disabled={!isEditing}
                        rows="3"
                    />

                    {/* Save Changes button appears only in editing mode */}
                    {isEditing && (
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-green-500 text-white rounded 
                         hover:bg-green-600 transition duration-300"
                        >
                            Save Changes
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
