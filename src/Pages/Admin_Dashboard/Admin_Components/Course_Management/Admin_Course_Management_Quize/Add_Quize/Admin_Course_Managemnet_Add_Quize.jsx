import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

// Import form components and icons
import Input from "../../../../../../Common_Components/Form_Components/Input";
import SelectDropDown from "../../../../../../Common_Components/Form_Components/SelectDropDown";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaPlus, FaSave } from "react-icons/fa";

// Import API & Redux action
import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { setIsQuizModified } from "../../../../../../Redux/Slices/quizesSlice";
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler";
import { MdCancel } from "react-icons/md";

function Admin_Course_Managemnet_Add_Quize() {
    const { allCourses } = useSelector((state) => state.allCourses);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const editingQuiz = location?.state?.editingQuiz ?? null;
    console.log("editingQuiz", editingQuiz);
    // Initialize form with react-hook-form
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    // Clears input fields after quiz creation

    const isQuizeUpdated = (currentData, originalData) => {
        return (
            currentData.author !== originalData.author ||
            currentData.title !== originalData.title ||
            currentData.time_date !== originalData.time_date ||
            currentData.course !== originalData.course ||
            currentData.timelimit !== originalData.timelimit ||
            currentData.status !== originalData.status
        );
    };
    function clearInput() {
        setValue("author", "");
        setValue("courseId", "");
        setValue("time_date", "");
        setValue("timelimit", "");
        setValue("title", "");
        setValue("status", "");
    }

    // Adds a new quiz
    const addQuizHandler = async (data) => {
        const toastId = toast.loading("Creating Quiz...");
        try {
            const response = await adminCourseManagementApis.createQuize(data);
            if (!response) return toast.error("Something went wrong.");
            dispatch(setIsQuizModified(true));
            toast.success("Quiz created successfully.");
            clearInput();
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Error while creating quiz"
            );
            toast.error(err);
        } finally {
            toast.dismiss(toastId);
        }
    };
    const editQuizHandler = async (data) => {
        if (!isQuizeUpdated(data, editingQuiz))
            return toast.error(
                "Nothing has changed. Try updating some fields before saving."
            );

        const toastId = toast.loading("Hang tight! Updating your quiz...");
        try {
            const res = await adminCourseManagementApis.editQuiz(
                data,
                data.courseId,
                editingQuiz._id
            );
            if (!res) return toast.error("Something went wrong...");
            toast.dismiss(toastId);
            toast.success("Awesome! Your quiz has been updated.");
            dispatch(setIsQuizModified(true));
            navigate(-1);
        } catch (error) {
            const err = customApiErrorHandler(
                error,
                "Error While updating Quiz"
            );
            toast.error(err);
        } finally {
            toast.dismiss(toastId);
        }
    };

    useEffect(() => {
        if (editingQuiz) {
            setValue("title", editingQuiz.title);
            setValue("author", editingQuiz.author);
            setValue("time_date", editingQuiz.time_date);
            setValue("courseId", editingQuiz.courseId);
            setValue("timelimit", editingQuiz.timelimit);
            setValue("status", editingQuiz.status);
        }
    }, [editingQuiz]);

    return (
        <form
            className="flex justify-center gap-6"
            onSubmit={handleSubmit(
                editingQuiz ? editQuizHandler : addQuizHandler
            )}
        >
            <div className="w-1/2 h-full">
                <h1 className="text-lg font-medium">Add Quiz To Course</h1>
                <p className="text-sm font-normal">
                    Create a new quiz for your course module
                </p>

                <div className="w-full h-fit bg-white shadow-md mt-4 rounded-md border p-4 space-y-2">
                    {/* Quiz Title */}
                    <Input
                        label="Quiz Title*"
                        placeholder="Enter quiz title"
                        type="text"
                        register={register}
                        inputName="title"
                        required
                        minLength={3}
                        maxLength={100}
                        error={errors?.title}
                    />

                    {/* Author & Publish Date */}
                    <div className="flex gap-2 w-full">
                        <div className="w-1/2">
                            <Input
                                label="Author Name*"
                                placeholder="Enter quiz author"
                                type="text"
                                register={register}
                                inputName="author"
                                required
                                error={errors?.author}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                label="Publish Date*"
                                type="datetime-local"
                                register={register}
                                inputName="time_date"
                                required
                                error={errors?.time_date}
                            />
                        </div>
                    </div>

                    {/* Course Selection */}
                    <SelectDropDown
                        disabled={editingQuiz ? true : false}
                        register={register}
                        inputName="courseId"
                        required
                        error={errors?.courseId}
                        selectName="Quiz Course"
                        selectId="courseId"
                        label="Select Course*"
                        options={allCourses?.map((course) => ({
                            value: course._id,
                            name: course.courseTitle,
                        }))}
                        defaultOption="Choose A Course"
                    />

                    {/* Quiz Time Limit */}
                    <Input
                        label="Quiz Time Limit (Minutes)*"
                        placeholder="Enter time limit"
                        type="number"
                        register={register}
                        inputName="timelimit"
                        required
                        error={errors?.timelimit}
                    />

                    {/* Quiz Status */}
                    <SelectDropDown
                        register={register}
                        inputName="status"
                        required
                        error={errors?.status}
                        selectName="Status"
                        selectId="status"
                        label="Status of quiz*"
                        options={[
                            { value: "draft", name: "Draft" },
                            { value: "public", name: "Public" },
                        ]}
                        defaultOption="Status"
                    />

                    {/* Submit Button */}
                    <div className="mt-4 space-x-4">
                        <button type="submit">
                            <IconBtn color={"#000f"}>
                                <span className="flex items-center gap-2 justify-center">
                                    {editingQuiz ? <FaSave /> : <FaPlus />}{" "}
                                    {editingQuiz ? "Save Quiz" : "Add Quiz"}
                                </span>
                            </IconBtn>
                        </button>
                        <button type="button" onClick={() => navigate(-1)}>
                            <IconBtn color={"#000f"}>
                                <span className="flex items-center gap-2 justify-center">
                                    <MdCancel /> Cancel
                                </span>
                            </IconBtn>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Admin_Course_Managemnet_Add_Quize;
