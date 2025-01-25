import React from "react";
import IconBtn from "../../../../../../Common_Components/IconBtn";
import { FaEdit } from "react-icons/fa";
import Admin_Course_Management_Single_Course_Tabular_Card from "./Admin_Course_Management_Single_Course_Tabular_Card/Admin_Course_Management_Single_Course_Tabular_Card";
import Admin_Course_Management_Single_Course_Module from "./Admin_Course_Management_Single_Course_Module/Admin_Course_Management_Single_Course_Module";
import { BsArrowDownCircle } from "react-icons/bs";

// function Admin_Course_Management_Single_Course() {
//     return (
//         <div className="p-4">
//             <div className="flex justify-between ">
//                 <h1 className="text-lg leading-none font-semibold text-gray-800 tracking-wide">
//                     Dynamic Course Name{" "}
//                 </h1>
//                 <span>
//                     <IconBtn color={"#000f"}>
//                         <FaEdit />
//                         Edit Course
//                     </IconBtn>
//                 </span>
//             </div>
//             <div className="my-6">
//                 <Admin_Course_Management_Single_Course_Tabular_Card />
//             </div>
//             <div>
// <Admin_Course_Management_Single_Course_Module
//     courseData={{
//         id: "63e5b0f8cdea6b6c453b5f30",
//         status: "Draft",
//         courseCategory: "Cybersecurity Essentials",
//         courseName: "Cybersecurity Fundamentals",
//         courseDescription:
//             "An introduction to the basics of cybersecurity, including threats, vulnerabilities, and protective measures.",
//         coursePrice: "289",
//         courseDuration: "6 weeks",
//         instructor: "John Doe",
//         ratings: 4.5,
//         courseModules: [
//             {
//                 moduleName: "Introduction to Cybersecurity",
//                 id: "63e5b0f8cdea6b6c453b5f31",
//                 moduleDescription:
//                     "Learn the core principles of cybersecurity and why it matters.",
//                 lessons: [
//                     {
//                         lessonName: "What is Cybersecurity?",
//                         id: "63e5b0f8cdea6b6c453b5f32",
//                         lessonDescription:
//                             "A comprehensive overview of cybersecurity basics.",
//                         lessonVideo:
//                             "https://example.com/video1",
//                         lessonDuration: "2:30",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf1",
//                                 resourceTitle:
//                                     "Cybersecurity Basics PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Types of Cyber Threats",
//                         id: "63e5b0f8cdea6b6c453b5f33",
//                         lessonDescription:
//                             "Explore various types of cyber threats including malware, phishing, and ransomware.",
//                         lessonVideo:
//                             "https://example.com/video2",
//                         lessonDuration: "3:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf2",
//                                 resourceTitle:
//                                     "Cyber Threats Overview PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "The Importance of Cybersecurity",
//                         id: "63e5b0f8cdea6b6c453b5f34",
//                         lessonDescription:
//                             "Understand the critical role cybersecurity plays in protecting data and privacy.",
//                         lessonVideo:
//                             "https://example.com/video3",
//                         lessonDuration: "2:45",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf3",
//                                 resourceTitle:
//                                     "Importance of Cybersecurity PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Common Vulnerabilities",
//                         id: "63e5b0f8cdea6b6c453b5f35",
//                         lessonDescription:
//                             "Identify common vulnerabilities that can be exploited by attackers.",
//                         lessonVideo:
//                             "https://example.com/video4",
//                         lessonDuration: "3:30",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf4",
//                                 resourceTitle:
//                                     "Common Vulnerabilities PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Basic Cyber Hygiene Practices",
//                         id: "63e5b0f8cdea6b6c453b5f36",
//                         lessonDescription:
//                             "Learn fundamental cybersecurity practices to protect yourself online.",
//                         lessonVideo:
//                             "https://example.com/video5",
//                         lessonDuration: "4:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf5",
//                                 resourceTitle:
//                                     "Cyber Hygiene Practices PDF",
//                             },
//                         ],
//                     },
//                 ],
//                 quiz: {
//                     quizTitle: "Introduction Quiz",
//                     questions: [
//                         {
//                             questionText:
//                                 "What does CIA stand for in cybersecurity?",
//                             options: [
//                                 "Confidentiality, Integrity, Availability",
//                                 "Cybersecurity, Information, Access",
//                                 "Control, Integration, Authorization",
//                                 "None of the above",
//                             ],
//                             correctOption: 0,
//                         },
//                     ],
//                 },
//             },
//             {
//                 moduleName: "Network Security Basics",
//                 id: "63e5b0f8cdea6b6c453b5f37",
//                 moduleDescription:
//                     "Understand the fundamental concepts of securing networks.",
//                 lessons: [
//                     {
//                         lessonName:
//                             "Introduction to Network Security",
//                         id: "63e5b0f8cdea6b6c453b5f38",
//                         lessonDescription:
//                             "An overview of network security principles.",
//                         lessonVideo:
//                             "https://example.com/video6",
//                         lessonDuration: "3:15",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf6",
//                                 resourceTitle:
//                                     "Network Security Overview PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Firewall Basics",
//                         id: "63e5b0f8cdea6b6c453b5f39",
//                         lessonDescription:
//                             "Learn how firewalls protect networks from unauthorized access.",
//                         lessonVideo:
//                             "https://example.com/video7",
//                         lessonDuration: "3:45",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf7",
//                                 resourceTitle:
//                                     "Firewall Basics PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Intrusion Detection Systems",
//                         id: "63e5b0f8cdea6b6c453b5f3a",
//                         lessonDescription:
//                             "Explore how intrusion detection systems help monitor network traffic.",
//                         lessonVideo:
//                             "https://example.com/video8",
//                         lessonDuration: "4:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf8",
//                                 resourceTitle:
//                                     "IDS Overview PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Encryption Fundamentals",
//                         id: "63e5b0f8cdea6b6c453b5f3b",
//                         lessonDescription:
//                             "Understand the basics of encryption and its importance in securing data.",
//                         lessonVideo:
//                             "https://example.com/video9",
//                         lessonDuration: "4:30",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf9",
//                                 resourceTitle:
//                                     "Encryption Basics PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Secure Network Design",
//                         id: "63e5b0f8cdea6b6c453b5f3c",
//                         lessonDescription:
//                             "Learn principles of designing a secure network architecture.",
//                         lessonVideo:
//                             "https://example.com/video10",
//                         lessonDuration: "4:15",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf10",
//                                 resourceTitle:
//                                     "Secure Network Design PDF",
//                             },
//                         ],
//                     },
//                 ],
//                 quiz: {
//                     quizTitle: "Network Security Quiz",
//                     questions: [
//                         {
//                             questionText:
//                                 "What is the primary purpose of a firewall?",
//                             options: [
//                                 "To encrypt data",
//                                 "To monitor network traffic",
//                                 "To block unauthorized access",
//                                 "To create backups",
//                             ],
//                             correctOption: 2,
//                         },
//                     ],
//                 },
//             },
//             {
//                 moduleName: "Understanding Malware",
//                 id: "63e5b0f8cdea6b6c453b5f3d",
//                 moduleDescription:
//                     "Gain insights into malware types and prevention methods.",
//                 lessons: [
//                     {
//                         lessonName: "What is Malware?",
//                         id: "63e5b0f8cdea6b6c453b5f3e",
//                         lessonDescription:
//                             "An overview of malware and its various forms.",
//                         lessonVideo:
//                             "https://example.com/video11",
//                         lessonDuration: "3:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf11",
//                                 resourceTitle:
//                                     "Malware Overview PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Types of Malware",
//                         id: "63e5b0f8cdea6b6c453b5f3f",
//                         lessonDescription:
//                             "Learn about different types of malware including viruses and spyware.",
//                         lessonVideo:
//                             "https://example.com/video12",
//                         lessonDuration: "4:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf12",
//                                 resourceTitle:
//                                     "Types of Malware PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "How Malware Spreads",
//                         id: "63e5b0f8cdea6b6c453b5f40",
//                         lessonDescription:
//                             "Understand the methods by which malware can infect systems.",
//                         lessonVideo:
//                             "https://example.com/video13",
//                         lessonDuration: "4:30",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf13",
//                                 resourceTitle:
//                                     "Malware Spread PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Malware Prevention Techniques",
//                         id: "63e5b0f8cdea6b6c453b5f41",
//                         lessonDescription:
//                             "Explore strategies to prevent malware infections.",
//                         lessonVideo:
//                             "https://example.com/video14",
//                         lessonDuration: "4:15",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf14",
//                                 resourceTitle:
//                                     "Malware Prevention PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Responding to Malware Incidents",
//                         id: "63e5b0f8cdea6b6c453b5f42",
//                         lessonDescription:
//                             "Learn how to respond to and recover from malware attacks.",
//                         lessonVideo:
//                             "https://example.com/video15",
//                         lessonDuration: "5:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf15",
//                                 resourceTitle:
//                                     "Incident Response PDF",
//                             },
//                         ],
//                     },
//                 ],
//                 quiz: {
//                     quizTitle: "Malware Quiz",
//                     questions: [
//                         {
//                             questionText:
//                                 "Which of the following is a type of malware?",
//                             options: [
//                                 "Firewall",
//                                 "Spyware",
//                                 "Router",
//                                 "VPN",
//                             ],
//                             correctOption: 1,
//                         },
//                     ],
//                 },
//             },
//             {
//                 moduleName: "Data Protection and Privacy",
//                 id: "63e5b0f8cdea6b6c453b5f43",
//                 moduleDescription:
//                     "Learn about the importance of data protection and privacy regulations.",
//                 lessons: [
//                     {
//                         lessonName:
//                             "Understanding Data Protection",
//                         id: "63e5b0f8cdea6b6c453b5f44",
//                         lessonDescription:
//                             "An overview of data protection and its significance in cybersecurity.",
//                         lessonVideo:
//                             "https://example.com/video16",
//                         lessonDuration: "3:30",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf16",
//                                 resourceTitle:
//                                     "Data Protection Overview PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Privacy Regulations Overview",
//                         id: "63e5b0f8cdea6b6c453b5f45",
//                         lessonDescription:
//                             "Explore key privacy regulations such as GDPR and CCPA.",
//                         lessonVideo:
//                             "https://example.com/video17",
//                         lessonDuration: "4:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf17",
//                                 resourceTitle:
//                                     "Privacy Regulations PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Data Breach Response",
//                         id: "63e5b0f8cdea6b6c453b5f46",
//                         lessonDescription:
//                             "Learn how to respond effectively to data breaches.",
//                         lessonVideo:
//                             "https://example.com/video18",
//                         lessonDuration: "4:15",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf18",
//                                 resourceTitle:
//                                     "Data Breach Response PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Best Practices for Data Protection",
//                         id: "63e5b0f8cdea6b6c453b5f47",
//                         lessonDescription:
//                             "Explore best practices to keep data secure.",
//                         lessonVideo:
//                             "https://example.com/video19",
//                         lessonDuration: "4:45",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf19",
//                                 resourceTitle:
//                                     "Best Practices PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "The Role of Encryption in Data Protection",
//                         id: "63e5b0f8cdea6b6c453b5f48",
//                         lessonDescription:
//                             "Understand how encryption is used to protect data.",
//                         lessonVideo:
//                             "https://example.com/video20",
//                         lessonDuration: "5:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf20",
//                                 resourceTitle:
//                                     "Encryption Role PDF",
//                             },
//                         ],
//                     },
//                 ],
//                 quiz: {
//                     quizTitle: "Data Protection Quiz",
//                     questions: [
//                         {
//                             questionText:
//                                 "What does GDPR stand for?",
//                             options: [
//                                 "General Data Protection Regulation",
//                                 "Global Data Privacy Regulation",
//                                 "General Data Privacy Rights",
//                                 "Global Data Protection Rights",
//                             ],
//                             correctOption: 0,
//                         },
//                     ],
//                 },
//             },
//             {
//                 moduleName: "Incident Response and Recovery",
//                 id: "63e5b0f8cdea6b6c453b5f49",
//                 moduleDescription:
//                     "Learn how to effectively respond to cybersecurity incidents.",
//                 lessons: [
//                     {
//                         lessonName:
//                             "What is Incident Response?",
//                         id: "63e5b0f8cdea6b6c453b5f4a",
//                         lessonDescription:
//                             "An introduction to incident response processes.",
//                         lessonVideo:
//                             "https://example.com/video21",
//                         lessonDuration: "3:30",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf21",
//                                 resourceTitle:
//                                     "Incident Response Overview PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Incident Response Planning",
//                         id: "63e5b0f8cdea6b6c453b5f4b",
//                         lessonDescription:
//                             "Learn how to create an effective incident response plan.",
//                         lessonVideo:
//                             "https://example.com/video22",
//                         lessonDuration: "4:00",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf22",
//                                 resourceTitle:
//                                     "Incident Response Planning PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "The Incident Response Team",
//                         id: "63e5b0f8cdea6b6c453b5f4c",
//                         lessonDescription:
//                             "Understand the roles and responsibilities of an incident response team.",
//                         lessonVideo:
//                             "https://example.com/video23",
//                         lessonDuration: "4:30",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf23",
//                                 resourceTitle:
//                                     "Incident Response Team PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName: "Post-Incident Review",
//                         id: "63e5b0f8cdea6b6c453b5f4d",
//                         lessonDescription:
//                             "Learn the importance of post-incident reviews and how to conduct them.",
//                         lessonVideo:
//                             "https://example.com/video24",
//                         lessonDuration: "4:15",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf24",
//                                 resourceTitle:
//                                     "Post-Incident Review PDF",
//                             },
//                         ],
//                     },
//                     {
//                         lessonName:
//                             "Continuous Improvement in Incident Response",
//                         id: "63e5b0f8cdea6b6c453b5f4e",
//                         lessonDescription:
//                             "Explore how to continuously improve incident response practices.",
//                         lessonVideo:
//                             "https://example.com/video25",
//                         lessonDuration: "4:45",
//                         resources: [
//                             {
//                                 resourceLink:
//                                     "https://example.com/pdf25",
//                                 resourceTitle:
//                                     "Continuous Improvement PDF",
//                             },
//                         ],
//                     },
//                 ],
//                 quiz: {
//                     quizTitle: "Incident Response Quiz",
//                     questions: [
//                         {
//                             questionText:
//                                 "What is the first step in incident response?",
//                             options: [
//                                 "Containment",
//                                 "Identification",
//                                 "Eradication",
//                                 "Recovery",
//                             ],
//                             correctOption: 1,
//                         },
//                     ],
//                 },
//             },
//         ],
//         thumbnail:
//             "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
//         tags: ["Cybersecurity", "Essentials"],
//     }}
// />
//             </div>
//         </div>
//     );
// }

function Admin_Course_Management_Single_Course() {
    return (
        <div className="w-[80%]  h-screen flex justify-between mx-auto gap-10 ">
            {/* Video ,ABout, Course Overview Container */}
            <div className="w-[65%] h-full ">
                {/* TItle */}
                <h1 className="text-lg font-medium text-gray-800 my-2">
                    Mastering Ilustrator
                </h1>
                {/* Video I Frame container */}

                <img
                    className="h-60  w-full rounded-lg object-cover"
                    alt="Video Placeholder.."
                    src="https://i.ytimg.com/vi/ZHlZp-BbPso/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYviSoTooJPHCKeCDP5256rGELrw"
                />
                {/* Instructor Profile And Name Container.... */}
                <div className="flex  gap-4 my-4">
                    {/* image */}
                    <img
                        src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                        alt="admin_profile_image"
                        height={50}
                        width={50}
                        className="rounded-full object-cover"
                    />
                    {/* Instructor details  */}
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">
                            Admin
                        </h3>
                        <h4 className="text-sm text-gray-700">
                            Mentor • Teahcer At Media Fleet Blue
                        </h4>
                    </div>
                </div>
                {/* About This Course... */}
                {/* About Course Heading  */}
                <h1 className="text-base font-medium">About This Couse</h1>
                {/* Dynamic Course Descripription Details.. */}
                <p className="text-sm font-normal text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam omnis fuga atque error sed necessitatibus nihil,
                    beatae similique voluptatibus impedit odio eum laudantium id
                    quibusdam doloribus laboriosam, autem ipsam porro. Excepturi
                    quia sed debitis eveniet sint, id illum quas sunt autem rem
                    necessitatibus, odit facere? Quae, rem neque alias dolorum
                    at, eligendi quidem, ipsum voluptatum modi facere aspernatur
                    deserunt harum?
                </p>
                {true && (
                    <span className="flex items-center gap-2 text-sm font-normal text-violet-700 my-1">
                        See more <BsArrowDownCircle />
                    </span>
                )}
            </div>
            {/* Course Module And Lesson Container.... */}
            <div className="w-[35%] h-full">
                {/* Course Modules.... Container..... */}
                <div>
                    <h1 className="text-lg font-medium text-gray-800 my-2">
                        Course Modules
                    </h1>
                    <div className="">
                        <Admin_Course_Management_Single_Course_Module
                            courseData={{
                                id: "63e5b0f8cdea6b6c453b5f30",
                                status: "Draft",
                                courseCategory: "Cybersecurity Essentials",
                                courseName: "Cybersecurity Fundamentals",
                                courseDescription:
                                    "An introduction to the basics of cybersecurity, including threats, vulnerabilities, and protective measures.",
                                coursePrice: "289",
                                courseDuration: "6 weeks",
                                instructor: "John Doe",
                                ratings: 4.5,
                                courseModules: [
                                    {
                                        moduleName:
                                            "Introduction to Cybersecurity",
                                        id: "63e5b0f8cdea6b6c453b5f31",
                                        moduleDescription:
                                            "Learn the core principles of cybersecurity and why it matters.",
                                        lessons: [
                                            {
                                                lessonName:
                                                    "What is Cybersecurity?",
                                                id: "63e5b0f8cdea6b6c453b5f32",
                                                lessonDescription:
                                                    "A comprehensive overview of cybersecurity basics.",
                                                lessonVideo:
                                                    "https://example.com/video1",
                                                lessonDuration: "2:30",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf1",
                                                        resourceTitle:
                                                            "Cybersecurity Basics PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Types of Cyber Threats",
                                                id: "63e5b0f8cdea6b6c453b5f33",
                                                lessonDescription:
                                                    "Explore various types of cyber threats including malware, phishing, and ransomware.",
                                                lessonVideo:
                                                    "https://example.com/video2",
                                                lessonDuration: "3:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf2",
                                                        resourceTitle:
                                                            "Cyber Threats Overview PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "The Importance of Cybersecurity",
                                                id: "63e5b0f8cdea6b6c453b5f34",
                                                lessonDescription:
                                                    "Understand the critical role cybersecurity plays in protecting data and privacy.",
                                                lessonVideo:
                                                    "https://example.com/video3",
                                                lessonDuration: "2:45",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf3",
                                                        resourceTitle:
                                                            "Importance of Cybersecurity PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Common Vulnerabilities",
                                                id: "63e5b0f8cdea6b6c453b5f35",
                                                lessonDescription:
                                                    "Identify common vulnerabilities that can be exploited by attackers.",
                                                lessonVideo:
                                                    "https://example.com/video4",
                                                lessonDuration: "3:30",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf4",
                                                        resourceTitle:
                                                            "Common Vulnerabilities PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Basic Cyber Hygiene Practices",
                                                id: "63e5b0f8cdea6b6c453b5f36",
                                                lessonDescription:
                                                    "Learn fundamental cybersecurity practices to protect yourself online.",
                                                lessonVideo:
                                                    "https://example.com/video5",
                                                lessonDuration: "4:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf5",
                                                        resourceTitle:
                                                            "Cyber Hygiene Practices PDF",
                                                    },
                                                ],
                                            },
                                        ],
                                        quiz: {
                                            quizTitle: "Introduction Quiz",
                                            questions: [
                                                {
                                                    questionText:
                                                        "What does CIA stand for in cybersecurity?",
                                                    options: [
                                                        "Confidentiality, Integrity, Availability",
                                                        "Cybersecurity, Information, Access",
                                                        "Control, Integration, Authorization",
                                                        "None of the above",
                                                    ],
                                                    correctOption: 0,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        moduleName: "Network Security Basics",
                                        id: "63e5b0f8cdea6b6c453b5f37",
                                        moduleDescription:
                                            "Understand the fundamental concepts of securing networks.",
                                        lessons: [
                                            {
                                                lessonName:
                                                    "Introduction to Network Security",
                                                id: "63e5b0f8cdea6b6c453b5f38",
                                                lessonDescription:
                                                    "An overview of network security principles.",
                                                lessonVideo:
                                                    "https://example.com/video6",
                                                lessonDuration: "3:15",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf6",
                                                        resourceTitle:
                                                            "Network Security Overview PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName: "Firewall Basics",
                                                id: "63e5b0f8cdea6b6c453b5f39",
                                                lessonDescription:
                                                    "Learn how firewalls protect networks from unauthorized access.",
                                                lessonVideo:
                                                    "https://example.com/video7",
                                                lessonDuration: "3:45",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf7",
                                                        resourceTitle:
                                                            "Firewall Basics PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Intrusion Detection Systems",
                                                id: "63e5b0f8cdea6b6c453b5f3a",
                                                lessonDescription:
                                                    "Explore how intrusion detection systems help monitor network traffic.",
                                                lessonVideo:
                                                    "https://example.com/video8",
                                                lessonDuration: "4:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf8",
                                                        resourceTitle:
                                                            "IDS Overview PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Encryption Fundamentals",
                                                id: "63e5b0f8cdea6b6c453b5f3b",
                                                lessonDescription:
                                                    "Understand the basics of encryption and its importance in securing data.",
                                                lessonVideo:
                                                    "https://example.com/video9",
                                                lessonDuration: "4:30",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf9",
                                                        resourceTitle:
                                                            "Encryption Basics PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Secure Network Design",
                                                id: "63e5b0f8cdea6b6c453b5f3c",
                                                lessonDescription:
                                                    "Learn principles of designing a secure network architecture.",
                                                lessonVideo:
                                                    "https://example.com/video10",
                                                lessonDuration: "4:15",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf10",
                                                        resourceTitle:
                                                            "Secure Network Design PDF",
                                                    },
                                                ],
                                            },
                                        ],
                                        quiz: {
                                            quizTitle: "Network Security Quiz",
                                            questions: [
                                                {
                                                    questionText:
                                                        "What is the primary purpose of a firewall?",
                                                    options: [
                                                        "To encrypt data",
                                                        "To monitor network traffic",
                                                        "To block unauthorized access",
                                                        "To create backups",
                                                    ],
                                                    correctOption: 2,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        moduleName: "Understanding Malware",
                                        id: "63e5b0f8cdea6b6c453b5f3d",
                                        moduleDescription:
                                            "Gain insights into malware types and prevention methods.",
                                        lessons: [
                                            {
                                                lessonName: "What is Malware?",
                                                id: "63e5b0f8cdea6b6c453b5f3e",
                                                lessonDescription:
                                                    "An overview of malware and its various forms.",
                                                lessonVideo:
                                                    "https://example.com/video11",
                                                lessonDuration: "3:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf11",
                                                        resourceTitle:
                                                            "Malware Overview PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName: "Types of Malware",
                                                id: "63e5b0f8cdea6b6c453b5f3f",
                                                lessonDescription:
                                                    "Learn about different types of malware including viruses and spyware.",
                                                lessonVideo:
                                                    "https://example.com/video12",
                                                lessonDuration: "4:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf12",
                                                        resourceTitle:
                                                            "Types of Malware PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "How Malware Spreads",
                                                id: "63e5b0f8cdea6b6c453b5f40",
                                                lessonDescription:
                                                    "Understand the methods by which malware can infect systems.",
                                                lessonVideo:
                                                    "https://example.com/video13",
                                                lessonDuration: "4:30",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf13",
                                                        resourceTitle:
                                                            "Malware Spread PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Malware Prevention Techniques",
                                                id: "63e5b0f8cdea6b6c453b5f41",
                                                lessonDescription:
                                                    "Explore strategies to prevent malware infections.",
                                                lessonVideo:
                                                    "https://example.com/video14",
                                                lessonDuration: "4:15",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf14",
                                                        resourceTitle:
                                                            "Malware Prevention PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Responding to Malware Incidents",
                                                id: "63e5b0f8cdea6b6c453b5f42",
                                                lessonDescription:
                                                    "Learn how to respond to and recover from malware attacks.",
                                                lessonVideo:
                                                    "https://example.com/video15",
                                                lessonDuration: "5:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf15",
                                                        resourceTitle:
                                                            "Incident Response PDF",
                                                    },
                                                ],
                                            },
                                        ],
                                        quiz: {
                                            quizTitle: "Malware Quiz",
                                            questions: [
                                                {
                                                    questionText:
                                                        "Which of the following is a type of malware?",
                                                    options: [
                                                        "Firewall",
                                                        "Spyware",
                                                        "Router",
                                                        "VPN",
                                                    ],
                                                    correctOption: 1,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        moduleName:
                                            "Data Protection and Privacy",
                                        id: "63e5b0f8cdea6b6c453b5f43",
                                        moduleDescription:
                                            "Learn about the importance of data protection and privacy regulations.",
                                        lessons: [
                                            {
                                                lessonName:
                                                    "Understanding Data Protection",
                                                id: "63e5b0f8cdea6b6c453b5f44",
                                                lessonDescription:
                                                    "An overview of data protection and its significance in cybersecurity.",
                                                lessonVideo:
                                                    "https://example.com/video16",
                                                lessonDuration: "3:30",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf16",
                                                        resourceTitle:
                                                            "Data Protection Overview PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Privacy Regulations Overview",
                                                id: "63e5b0f8cdea6b6c453b5f45",
                                                lessonDescription:
                                                    "Explore key privacy regulations such as GDPR and CCPA.",
                                                lessonVideo:
                                                    "https://example.com/video17",
                                                lessonDuration: "4:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf17",
                                                        resourceTitle:
                                                            "Privacy Regulations PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Data Breach Response",
                                                id: "63e5b0f8cdea6b6c453b5f46",
                                                lessonDescription:
                                                    "Learn how to respond effectively to data breaches.",
                                                lessonVideo:
                                                    "https://example.com/video18",
                                                lessonDuration: "4:15",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf18",
                                                        resourceTitle:
                                                            "Data Breach Response PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Best Practices for Data Protection",
                                                id: "63e5b0f8cdea6b6c453b5f47",
                                                lessonDescription:
                                                    "Explore best practices to keep data secure.",
                                                lessonVideo:
                                                    "https://example.com/video19",
                                                lessonDuration: "4:45",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf19",
                                                        resourceTitle:
                                                            "Best Practices PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "The Role of Encryption in Data Protection",
                                                id: "63e5b0f8cdea6b6c453b5f48",
                                                lessonDescription:
                                                    "Understand how encryption is used to protect data.",
                                                lessonVideo:
                                                    "https://example.com/video20",
                                                lessonDuration: "5:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf20",
                                                        resourceTitle:
                                                            "Encryption Role PDF",
                                                    },
                                                ],
                                            },
                                        ],
                                        quiz: {
                                            quizTitle: "Data Protection Quiz",
                                            questions: [
                                                {
                                                    questionText:
                                                        "What does GDPR stand for?",
                                                    options: [
                                                        "General Data Protection Regulation",
                                                        "Global Data Privacy Regulation",
                                                        "General Data Privacy Rights",
                                                        "Global Data Protection Rights",
                                                    ],
                                                    correctOption: 0,
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        moduleName:
                                            "Incident Response and Recovery",
                                        id: "63e5b0f8cdea6b6c453b5f49",
                                        moduleDescription:
                                            "Learn how to effectively respond to cybersecurity incidents.",
                                        lessons: [
                                            {
                                                lessonName:
                                                    "What is Incident Response?",
                                                id: "63e5b0f8cdea6b6c453b5f4a",
                                                lessonDescription:
                                                    "An introduction to incident response processes.",
                                                lessonVideo:
                                                    "https://example.com/video21",
                                                lessonDuration: "3:30",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf21",
                                                        resourceTitle:
                                                            "Incident Response Overview PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Incident Response Planning",
                                                id: "63e5b0f8cdea6b6c453b5f4b",
                                                lessonDescription:
                                                    "Learn how to create an effective incident response plan.",
                                                lessonVideo:
                                                    "https://example.com/video22",
                                                lessonDuration: "4:00",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf22",
                                                        resourceTitle:
                                                            "Incident Response Planning PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "The Incident Response Team",
                                                id: "63e5b0f8cdea6b6c453b5f4c",
                                                lessonDescription:
                                                    "Understand the roles and responsibilities of an incident response team.",
                                                lessonVideo:
                                                    "https://example.com/video23",
                                                lessonDuration: "4:30",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf23",
                                                        resourceTitle:
                                                            "Incident Response Team PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Post-Incident Review",
                                                id: "63e5b0f8cdea6b6c453b5f4d",
                                                lessonDescription:
                                                    "Learn the importance of post-incident reviews and how to conduct them.",
                                                lessonVideo:
                                                    "https://example.com/video24",
                                                lessonDuration: "4:15",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf24",
                                                        resourceTitle:
                                                            "Post-Incident Review PDF",
                                                    },
                                                ],
                                            },
                                            {
                                                lessonName:
                                                    "Continuous Improvement in Incident Response",
                                                id: "63e5b0f8cdea6b6c453b5f4e",
                                                lessonDescription:
                                                    "Explore how to continuously improve incident response practices.",
                                                lessonVideo:
                                                    "https://example.com/video25",
                                                lessonDuration: "4:45",
                                                resources: [
                                                    {
                                                        resourceLink:
                                                            "https://example.com/pdf25",
                                                        resourceTitle:
                                                            "Continuous Improvement PDF",
                                                    },
                                                ],
                                            },
                                        ],
                                        quiz: {
                                            quizTitle: "Incident Response Quiz",
                                            questions: [
                                                {
                                                    questionText:
                                                        "What is the first step in incident response?",
                                                    options: [
                                                        "Containment",
                                                        "Identification",
                                                        "Eradication",
                                                        "Recovery",
                                                    ],
                                                    correctOption: 1,
                                                },
                                            ],
                                        },
                                    },
                                ],
                                thumbnail:
                                    "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg",
                                tags: ["Cybersecurity", "Essentials"],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin_Course_Management_Single_Course;
