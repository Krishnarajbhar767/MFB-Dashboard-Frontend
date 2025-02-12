import React, { useState } from "react";
import { StudentCustomToggale } from "../../CustomInputs/StudentCustomInput";

import StudentNotificationSettingToggaleAndText from "./ToggaleAndHeadings/StudentNotificationSettingToggaleAndText";

const StudentNotificationSetting = React.memo(
    function StudentNotificationSetting() {
        const [isNewsChecked, setIsNewsChecked] = useState(true);
        const [isUpdatesChecked, setIsUpdatesChecked] = useState(false);
        return (
            <div>
                <h1 className="text-gray-900 text-lg font-medium  py-2 bg-green-100 pl-4">
                    Notification
                </h1>
                {/* Email And PUsh Notification Container */}
                <div className="flex px-4 mt-2">
                    {/* Email Notification Setting Container */}
                    <div className="w-1/2">
                        <h1 className="text-base font-medium text-gray-800">
                            Email notification
                        </h1>
                        <p className="text-xs font-medium text-gray-600">
                            Get Email to find out whats's going on when you're
                            not online. you can turn these off.
                        </p>
                        <StudentNotificationSettingToggaleAndText
                            isChecked={isNewsChecked}
                            setChecked={setIsNewsChecked}
                            heading={"News"}
                            paragraph={"Get Lates News From Us."}
                        />
                        <StudentNotificationSettingToggaleAndText
                            isChecked={isUpdatesChecked}
                            setChecked={setIsUpdatesChecked}
                            heading={"updates"}
                            paragraph={"Get Lates News And Updates From Us."}
                        />
                    </div>
                    {/* Push Notification Settings */}
                    <div className="w-1/2 border-l border-gray-400 pl-2">
                        <h1 className="text-base font-medium text-gray-800">
                            Push notification
                        </h1>
                        <p className="text-xs font-medium text-gray-600">
                            Get Push notification to find out whats's going on
                            when you're online.
                        </p>
                        <StudentNotificationSettingToggaleAndText
                            isChecked={isNewsChecked}
                            setChecked={setIsNewsChecked}
                            heading={"Reminder"}
                            paragraph={
                                "These are notification  to remind you of updates you might have missed."
                            }
                        />
                        <StudentNotificationSettingToggaleAndText
                            isChecked={isUpdatesChecked}
                            setChecked={setIsUpdatesChecked}
                            heading={"More activity about you"}
                            paragraph={"Get Lates News And Updates From Us."}
                        />
                    </div>
                </div>
            </div>
        );
    }
);

export default StudentNotificationSetting;
