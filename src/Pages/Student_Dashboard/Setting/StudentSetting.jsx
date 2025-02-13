import React, { useState } from "react";
import StudentSettingSidebar from "./Sidebar/StudentSettingSidebar";
import { MdPerson } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import StudentBasicInformationSetting from "./Setting Outlets/Basic Information/StudentBasicInformationSetting";
import StudentNotificationSetting from "./Setting Outlets/Notification/StudentNotificationSetting";
import StudentSocialAccountsSetting from "./Setting Outlets/Socials Accouts/StudentSocialAccountsSetting";
import StudentPasswordSecuritySetting from "./Setting Outlets/Password And Security/StudentPasswordSecuritySetting";
import StudentDeleteAccountSetting from "./Setting Outlets/Delete Account/StudentDeleteAccountSetting";
function StudentSetting() {
    const [selectedSettingTab, setSelectedSettingTab] =
        useState("Basic information");
    const tabs = [
        { text: "Basic information", Icon: MdPerson },
        { text: "Notification", Icon: IoIosNotifications },
        { text: "Social accounts", Icon: IoShareSocial },
        { text: "Password & Security", Icon: MdSecurity },
        { text: "Delete account", Icon: MdDelete },
    ];
    return (
        <div className=" md:shadow-sm md:border-2  lg:mr-3  rounded-md overflow-hidden">
            {/* Sidebar */}
            <div className=" flex md:flex-row  w-full flex-col ">
                <div className="md:w-1/2  md:pl-4">
                    <StudentSettingSidebar
                        selectedSettingTab={selectedSettingTab}
                        setSelectedSettingTab={setSelectedSettingTab}
                        tabs={tabs}
                    />
                </div>
                {/* Render Selected Setting Outlet */}
                <div className="md:w-full min-h-screen  rounded-md   text-gray-800 mt-3 md:mt-0">
                    {selectedSettingTab === tabs[0].text && (
                        <StudentBasicInformationSetting />
                    )}
                    {selectedSettingTab === tabs[1].text && (
                        <StudentNotificationSetting />
                    )}
                    {selectedSettingTab === tabs[2].text && (
                        <StudentSocialAccountsSetting />
                    )}
                    {selectedSettingTab === tabs[3].text && (
                        <StudentPasswordSecuritySetting />
                    )}
                    {selectedSettingTab === tabs[4].text && (
                        <StudentDeleteAccountSetting />
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentSetting;
