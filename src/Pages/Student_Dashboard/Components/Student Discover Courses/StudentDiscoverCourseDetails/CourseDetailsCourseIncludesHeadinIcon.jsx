import React from "react";
import { HiPlayCircle } from "react-icons/hi2";
import { IoMdCloudDownload } from "react-icons/io";
import { MdOutlineImportantDevices } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

function CourseDetailsCourseIncludesHeadinIcon({ Icon, title }) {
    return (
        <h1 className="flex items-center text-xs font-medium text-gray-600 gap-2 capitalize">
            <span className="text-xl">
                {Icon === "PiCertificate" && <PiCertificate />}
                {Icon === "MdOutlineImportantDevices" && (
                    <MdOutlineImportantDevices />
                )}
                {Icon === "IoMdCloudDownload" && <IoMdCloudDownload />}
                {Icon === "HiPlayCircle" && <HiPlayCircle />}
            </span>
            {title}
        </h1>
    );
}

export default CourseDetailsCourseIncludesHeadinIcon;
