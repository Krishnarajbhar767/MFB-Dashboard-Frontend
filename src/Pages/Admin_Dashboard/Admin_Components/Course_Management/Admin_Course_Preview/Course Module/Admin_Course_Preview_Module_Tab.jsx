import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosPlayCircle } from "react-icons/io";
import {
    FiEdit,
    FiFileText,
    FiChevronDown,
    FiChevronRight,
} from "react-icons/fi";

import { adminCourseManagementApis } from "../../../../../../services/apis/Admin/Course Management/adminCourseManagementApis";
import { customApiErrorHandler } from "../../../../../../Utils/Error/cutomApiErrorHandler";
import { setIsCoursesModified } from "../../../../../../Redux/Slices/All_Courses";
import ConfirmationModal from "../../../../../../Common_Components/modal/ConfirmationModal";

/**
 * Admin Course Preview Module Tab Component
 *
 * A modern, interactive module component that displays module information
 * and allows for expanding to view lessons and resources.
 *
 * Features:
 * - Expandable/collapsible module view
 * - Lesson management with edit/delete functionality
 * - Resource viewing for each lesson
 * - Clean, intuitive UI with visual feedback
 *
 * @param {Object} props - Component props
 * @param {Object} props.module - The module object containing lessons
 * @param {string} props.courseId - The ID of the parent course
 * @param {number} props.moduleIndex - The index number of this module
 */
const Admin_Course_Preview_Module_Tab = React.memo(
    ({ module, courseId, moduleIndex }) => {
        // State for module expansion
        const [showLesson, setShowLesson] = useState(false);

        // State to track which lessons have their resources expanded
        const [expandedResources, setExpandedResources] = useState({});

        // State for confirmation modal
        const [confirmationModal, setConfirmationModal] = useState(null);

        const dispatch = useDispatch();
        const navigate = useNavigate();

        /**
         * Toggles the visibility of resources for a specific lesson
         * @param {string} lessonId - The ID of the lesson
         * @param {Event} e - The event object
         */
        const toggleResources = (lessonId, e) => {
            e.stopPropagation();
            setExpandedResources((prev) => ({
                ...prev,
                [lessonId]: !prev[lessonId],
            }));
        };

        /**
         * Handles the module deletion process
         * - Calls API to delete the module
         * - Updates Redux state on success
         * - Shows appropriate toast messages
         */
        const deleteModuleHandler = async () => {
            const toastId = toast.loading("Deleting module...");
            try {
                const response = await adminCourseManagementApis.deleteModule(
                    courseId,
                    module._id
                );
                if (!response) {
                    toast.error("Failed to delete module");
                    return;
                }
                dispatch(setIsCoursesModified(true));
                setConfirmationModal(null);
                toast.success("Module deleted successfully");
            } catch (error) {
                const err = customApiErrorHandler(error, "Delete module error");
                toast.error(err);
            } finally {
                toast.dismiss(toastId);
            }
        };

        /**
         * Handles the lesson deletion process
         * @param {string} lessonId - The ID of the lesson to delete
         */
        const deleteLessonHandler = async (lessonId) => {
            const toastId = toast.loading("Deleting lesson...");
            try {
                const res = await adminCourseManagementApis.deleteLesson(
                    courseId,
                    module._id,
                    lessonId
                );
                if (!res) {
                    toast.error("Failed to delete lesson");
                    return;
                }
                setConfirmationModal(null);
                toast.success("Lesson deleted successfully");
                dispatch(setIsCoursesModified(true));
            } catch (error) {
                const err = customApiErrorHandler(error, "Delete lesson error");
                toast.error(err);
            } finally {
                toast.dismiss(toastId);
            }
        };
        /**
         * Handles the Resource deletion process
         * @param {string} resourceId - The ID of the resource to delete
         */
        const deleteResourceHandler = async (
            resourceId,
            lessonId,
            moduleId,
            courseId
        ) => {
            const toastId = toast.loading("Deleting Resource...");
            try {
                const res = await adminCourseManagementApis.deleteResource(
                    resourceId,
                    lessonId,
                    moduleId,
                    courseId
                );
                if (!res) {
                    toast.error("Failed to delete lesson");
                    return;
                }
                setConfirmationModal(null);
                toast.success("Resource deleted successfully");
                dispatch(setIsCoursesModified(true));
            } catch (error) {
                const err = customApiErrorHandler(error, "Delete lesson error");
                toast.error(err);
            } finally {
                toast.dismiss(toastId);
            }
        };
        /**
         * Handles the Edit Resource  process
         * @param {string} resourceId - The ID of the resource to delete
         */
        const editResourceHandler = (
            resource,
            resourceId,
            lessonId,
            moduleId,
            courseId
        ) => {
            navigate("/admin/course_management/add_resource/edit", {
                state: {
                    currentlyEditingResourceData: {
                        resource,
                        resourceId,
                        lessonId,
                        moduleId,
                        courseId,
                    },
                },
            });
        };
        return (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Module header */}
                <div
                    className={`p-4 flex items-center justify-between cursor-pointer transition-colors ${
                        showLesson ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setShowLesson(!showLesson)}
                >
                    {/* Module title and count */}
                    <div className="flex items-center gap-3">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                showLesson
                                    ? "bg-blue-100 text-blue-600"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                        >
                            {moduleIndex}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-800 capitalize">
                                {module?.moduletitle}
                            </h3>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {module?.lessons?.length || 0} lesson
                                {module?.lessons?.length !== 1 ? "s" : ""}
                            </p>
                        </div>
                    </div>

                    {/* Module actions */}
                    <div className="flex items-center gap-2">
                        {/* Edit module button */}
                        <button
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(
                                    "/admin/course_management/add_new_module/edit",
                                    {
                                        state: {
                                            courseId,
                                            currentlyEditingModule: module,
                                        },
                                    }
                                );
                            }}
                            aria-label="Edit module"
                        >
                            <FiEdit size={16} />
                        </button>

                        {/* Delete module button */}
                        <button
                            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setConfirmationModal({
                                    text1: "Delete Module",
                                    text2: "Are you sure you want to delete this module? All lessons within this module will also be deleted.",
                                    btn1Handler: deleteModuleHandler,
                                    btn1Text: "Delete",
                                    btn2Handler: () =>
                                        setConfirmationModal(null),
                                    btn2Text: "Cancel",
                                });
                            }}
                            aria-label="Delete module"
                        >
                            <RiDeleteBin6Line size={16} />
                        </button>

                        {/* Expand/collapse indicator */}
                        <div
                            className={`p-2 text-gray-500 ${
                                showLesson ? "transform rotate-180" : ""
                            }`}
                        >
                            <IoIosArrowDown size={16} />
                        </div>
                    </div>
                </div>

                {/* Lessons list (shown when expanded) */}
                {showLesson && (
                    <div className="bg-gray-50 divide-y divide-gray-100">
                        {module?.lessons?.length > 0 ? (
                            module.lessons.map((lesson, index) => (
                                <div
                                    key={lesson._id || index}
                                    className="transition-all"
                                >
                                    {/* Lesson row */}
                                    <div className="px-4 py-3 hover:bg-gray-100">
                                        <div className="flex items-center justify-between">
                                            {/* Lesson title with icon */}
                                            <div
                                                className="flex items-center gap-3 cursor-pointer flex-1"
                                                onClick={(e) =>
                                                    toggleResources(
                                                        lesson._id,
                                                        e
                                                    )
                                                }
                                            >
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                                    <IoIosPlayCircle
                                                        size={16}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {lesson.lessontitle}
                                                        </span>
                                                        {/* Expand/collapse indicator for resources */}
                                                        {expandedResources[
                                                            lesson._id
                                                        ] ? (
                                                            <FiChevronDown
                                                                size={14}
                                                                className="text-gray-500"
                                                            />
                                                        ) : (
                                                            <FiChevronRight
                                                                size={14}
                                                                className="text-gray-500"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Lesson actions */}
                                            <div className="flex items-center gap-1">
                                                {/* Edit lesson button */}
                                                <button
                                                    className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                                                    onClick={() =>
                                                        navigate(
                                                            "/admin/course_management/add_new_lesson/edit",
                                                            {
                                                                state: {
                                                                    moduleId:
                                                                        module._id,
                                                                    courseId:
                                                                        courseId,
                                                                    currentlyEditingLesson:
                                                                        lesson,
                                                                    lessonId:
                                                                        lesson._id,
                                                                },
                                                            }
                                                        )
                                                    }
                                                    aria-label="Edit lesson"
                                                >
                                                    <FiEdit size={14} />
                                                </button>

                                                {/* Delete lesson button */}
                                                <button
                                                    className="p-1.5 text-red-600 hover:bg-red-100 rounded-full transition-colors"
                                                    onClick={() =>
                                                        setConfirmationModal({
                                                            text1: "Delete Lesson",
                                                            text2: "Are you sure you want to delete this lesson? This action cannot be undone.",
                                                            btn1Handler: () =>
                                                                deleteLessonHandler(
                                                                    lesson._id
                                                                ),
                                                            btn1Text: "Delete",
                                                            btn2Handler: () =>
                                                                setConfirmationModal(
                                                                    null
                                                                ),
                                                            btn2Text: "Cancel",
                                                        })
                                                    }
                                                    aria-label="Delete lesson"
                                                >
                                                    <RiDeleteBin6Line
                                                        size={14}
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Resources section (shown when expanded) */}
                                        {expandedResources[lesson._id] && (
                                            <div className="mt-2 ml-11 mb-1">
                                                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                                    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200">
                                                        <h4 className="text-xs font-semibold text-gray-600">
                                                            RESOURCES
                                                        </h4>
                                                    </div>

                                                    {/* Display resources if available */}
                                                    {lesson.resources &&
                                                    lesson.resources.length >
                                                        0 ? (
                                                        <div className="divide-y divide-gray-100">
                                                            {lesson.resources.map(
                                                                (
                                                                    resource,
                                                                    idx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="px-3 py-2 flex items-center justify-between hover:bg-gray-50"
                                                                    >
                                                                        {/* Resource title */}
                                                                        <div className="flex items-center gap-2">
                                                                            <FiFileText
                                                                                className="text-gray-400"
                                                                                size={
                                                                                    14
                                                                                }
                                                                            />
                                                                            <span className="text-sm text-gray-600">
                                                                                {resource.resourcetitle ||
                                                                                    `Resource ${
                                                                                        idx +
                                                                                        1
                                                                                    }`}
                                                                            </span>
                                                                        </div>

                                                                        {/* Resource actions */}
                                                                        <div className="flex items-center gap-1">
                                                                            <button
                                                                                className="p-1 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                                                                aria-label="Edit resource"
                                                                                onClick={() =>
                                                                                    editResourceHandler(
                                                                                        resource,
                                                                                        resource._id,
                                                                                        lesson._id,
                                                                                        module._id,
                                                                                        courseId
                                                                                    )
                                                                                }
                                                                            >
                                                                                <FiEdit
                                                                                    size={
                                                                                        12
                                                                                    }
                                                                                />
                                                                            </button>
                                                                            <button
                                                                                className="p-1 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                                                aria-label="Delete resource"
                                                                                onClick={() =>
                                                                                    setConfirmationModal(
                                                                                        {
                                                                                            text1: "Delete Resource",
                                                                                            text2: "Are you sure ? you want to delete this Resource? This action cannot be undone.",
                                                                                            btn1Handler:
                                                                                                () =>
                                                                                                    deleteResourceHandler(
                                                                                                        resource._id,
                                                                                                        lesson._id,
                                                                                                        module._id,
                                                                                                        courseId
                                                                                                    ),
                                                                                            btn1Text:
                                                                                                "Delete",
                                                                                            btn2Handler:
                                                                                                () =>
                                                                                                    setConfirmationModal(
                                                                                                        null
                                                                                                    ),
                                                                                            btn2Text:
                                                                                                "Cancel",
                                                                                        }
                                                                                    )
                                                                                }
                                                                            >
                                                                                <RiDeleteBin6Line
                                                                                    size={
                                                                                        12
                                                                                    }
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    ) : (
                                                        // Message when no resources are available
                                                        <div className="px-3 py-4 text-center">
                                                            <p className="text-xs text-gray-500">
                                                                No resources
                                                                available for
                                                                this lesson
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Message when no lessons are available
                            <div className="p-6 text-center">
                                <p className="text-gray-500">
                                    No lessons available
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    Add lessons to build this module
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Confirmation modal */}
                {confirmationModal && (
                    <ConfirmationModal modalData={confirmationModal} />
                )}
            </div>
        );
    }
);

export default Admin_Course_Preview_Module_Tab;
