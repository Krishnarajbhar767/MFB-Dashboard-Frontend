import React from "react";
import { StudentCustomToggale } from "../../../CustomInputs/StudentCustomInput";

const StudentNotificationSettingToggaleAndText = React.memo(
    function StudentNotificationSettingToggaleAndText({
        isChecked,
        setChecked,
        heading,
        paragraph,
    }) {
        return (
            <div className="flex items-center">
                <span>
                    {" "}
                    <StudentCustomToggale
                        isChecked={isChecked}
                        setChecked={setChecked}
                    />
                </span>
                <div>
                    <h1 className="text-base font-medium text-gray-800">
                        {heading}
                    </h1>
                    <span className="text-xs font-medium text-gray-600 capitlaize leading-none">
                        {paragraph}
                    </span>
                </div>
            </div>
        );
    }
);

export default StudentNotificationSettingToggaleAndText;
