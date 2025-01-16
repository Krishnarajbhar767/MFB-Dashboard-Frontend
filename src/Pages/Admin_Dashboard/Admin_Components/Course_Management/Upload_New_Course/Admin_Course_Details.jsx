import React from "react";
import Input from "../../../../../Common_Components/Form_Components/Input";
import { useForm } from "react-hook-form";
import TextArea from "../../../../../Common_Components/Form_Components/TextArea";
const Admin_Course_Details = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className="py-2 flex flex-col space-y-2">
            <h1 className="py-2 font-medium font-sm text-gray-700">
                Course Details
            </h1>
            <Input
                {...register("courseName")}
                type={"text"}
                placeholder={"Course Name"}
                label={"Course Name"}
            />
            <TextArea
                placeholder={"Course Description"}
                type={"text"}
                label={"Course Description"}
            />
        </div>
    );
};

export default Admin_Course_Details;
