import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Student_Discover_Course_Card from "./Student Discover Course Card/Student_Discover_Course_Card";

function Student_Discover_Course_Index() {
    const categories = [
        { name: "Photography" },
        { name: "App Development" },
        { name: "Design" },
        { name: "Business" },
        { name: "Data Science" },
        { name: "Web Development" },
        { name: "Cloud Computing" },
        { name: "Cybersecurity" },
        { name: "Marketing" },
        { name: "Game Development" },
    ];

    const courses = [
        {
            name: "Full-Stack Web Development",
            description:
                "Learn how to build dynamic websites and applications using modern web technologies such as React, Node.js, MongoDB, and Express.",
            price: 4999,
            category: "Web Development",
            author: "John Doe",
            stars: 1,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Data Science Mastery",
            description:
                "A comprehensive course covering Python, machine learning, data visualization, and real-world data analysis projects.",
            price: 7999,
            category: "Web Development",
            author: "Dr. Emily Carter",
            stars: 1.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Digital Marketing 101",
            description:
                "Learn the essentials of SEO, social media marketing, content strategy, and analytics to grow your online presence.",
            price: 2999,
            category: "Web Development",
            author: "Samantha Green",
            stars: 2,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "UI/UX Design Bootcamp",
            description:
                "Master user interface and user experience design with tools like Figma and Adobe XD, and learn design principles for real-world projects.",
            price: 3999,
            category: "Web Development",
            author: "Michael Brown",
            stars: 2.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cloud Computing Basics",
            description:
                "Understand the fundamentals of cloud computing, including AWS, Azure, and Google Cloud, to kickstart your cloud career.",
            price: 4599,
            category: "Web Development",
            author: "Alice Johnson",
            stars: 3,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Mobile App Development with Flutter",
            description:
                "Create cross-platform mobile applications using Flutter, Dart, and Firebase. Perfect for beginners and experienced developers alike.",
            price: 5499,
            category: "Web Development",
            author: "Chris Wilson",
            stars: 3.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cybersecurity Fundamentals",
            description:
                "Learn how to protect systems, networks, and data from cyber threats with hands-on labs and real-world scenarios.",
            price: 4999,
            category: "Web Development",
            author: "Sophia Taylor",
            stars: 4,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Photography Essentials",
            description:
                "Discover photography techniques, camera settings, and editing tips to capture stunning photos.",
            price: 1999,
            category: "Web Development",
            author: "James Anderson",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Business Analytics with Excel",
            description:
                "Use Excel to analyze business data, create dashboards, and generate insights for data-driven decision-making.",
            price: 3499,
            category: "Web Development",
            author: "Rebecca Lee",
            stars: 5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Game Development with Unity",
            description:
                "Build engaging 2D and 3D games using Unity and C#. Includes asset creation and game mechanics development.",
            price: 6999,
            category: "Game Development",
            author: "Liam Martinez",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Full-Stack Web Development",
            description:
                "Learn how to build dynamic websites and applications using modern web technologies such as React, Node.js, MongoDB, and Express.",
            price: 4999,
            category: "Web Development",
            author: "John Doe",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Data Science Mastery",
            description:
                "A comprehensive course covering Python, machine learning, data visualization, and real-world data analysis projects.",
            price: 7999,
            category: "Data Science",
            author: "Dr. Emily Carter",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Digital Marketing 101",
            description:
                "Learn the essentials of SEO, social media marketing, content strategy, and analytics to grow your online presence.",
            price: 2999,
            category: "Marketing",
            author: "Samantha Green",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "UI/UX Design Bootcamp",
            description:
                "Master user interface and user experience design with tools like Figma and Adobe XD, and learn design principles for real-world projects.",
            price: 3999,
            category: "Design",
            author: "Michael Brown",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cloud Computing Basics",
            description:
                "Understand the fundamentals of cloud computing, including AWS, Azure, and Google Cloud, to kickstart your cloud career.",
            price: 4599,
            category: "Cloud Computing",
            author: "Alice Johnson",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Mobile App Development with Flutter",
            description:
                "Create cross-platform mobile applications using Flutter, Dart, and Firebase. Perfect for beginners and experienced developers alike.",
            price: 5499,
            category: "App Development",
            author: "Chris Wilson",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cybersecurity Fundamentals",
            description:
                "Learn how to protect systems, networks, and data from cyber threats with hands-on labs and real-world scenarios.",
            price: 4999,
            category: "Cybersecurity",
            author: "Sophia Taylor",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Photography Essentials",
            description:
                "Discover photography techniques, camera settings, and editing tips to capture stunning photos.",
            price: 1999,
            category: "Photography",
            author: "James Anderson",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Business Analytics with Excel",
            description:
                "Use Excel to analyze business data, create dashboards, and generate insights for data-driven decision-making.",
            price: 3499,
            category: "Business",
            author: "Rebecca Lee",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Game Development with Unity",
            description:
                "Build engaging 2D and 3D games using Unity and C#. Includes asset creation and game mechanics development.",
            price: 6999,
            category: "Game Development",
            author: "Liam Martinez",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Full-Stack Web Development",
            description:
                "Learn how to build dynamic websites and applications using modern web technologies such as React, Node.js, MongoDB, and Express.",
            price: 4999,
            category: "Web Development",
            author: "John Doe",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Data Science Mastery",
            description:
                "A comprehensive course covering Python, machine learning, data visualization, and real-world data analysis projects.",
            price: 7999,
            category: "Data Science",
            author: "Dr. Emily Carter",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Digital Marketing 101",
            description:
                "Learn the essentials of SEO, social media marketing, content strategy, and analytics to grow your online presence.",
            price: 2999,
            category: "Marketing",
            author: "Samantha Green",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "UI/UX Design Bootcamp",
            description:
                "Master user interface and user experience design with tools like Figma and Adobe XD, and learn design principles for real-world projects.",
            price: 3999,
            category: "Design",
            author: "Michael Brown",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cloud Computing Basics",
            description:
                "Understand the fundamentals of cloud computing, including AWS, Azure, and Google Cloud, to kickstart your cloud career.",
            price: 4599,
            category: "Cloud Computing",
            author: "Alice Johnson",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Mobile App Development with Flutter",
            description:
                "Create cross-platform mobile applications using Flutter, Dart, and Firebase. Perfect for beginners and experienced developers alike.",
            price: 5499,
            category: "App Development",
            author: "Chris Wilson",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cybersecurity Fundamentals",
            description:
                "Learn how to protect systems, networks, and data from cyber threats with hands-on labs and real-world scenarios.",
            price: 4999,
            category: "Cybersecurity",
            author: "Sophia Taylor",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Photography Essentials",
            description:
                "Discover photography techniques, camera settings, and editing tips to capture stunning photos.",
            price: 1999,
            category: "Photography",
            author: "James Anderson",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Business Analytics with Excel",
            description:
                "Use Excel to analyze business data, create dashboards, and generate insights for data-driven decision-making.",
            price: 3499,
            category: "Business",
            author: "Rebecca Lee",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Game Development with Unity",
            description:
                "Build engaging 2D and 3D games using Unity and C#. Includes asset creation and game mechanics development.",
            price: 6999,
            category: "Game Development",
            author: "Liam Martinez",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Full-Stack Web Development",
            description:
                "Learn how to build dynamic websites and applications using modern web technologies such as React, Node.js, MongoDB, and Express.",
            price: 4999,
            category: "Web Development",
            author: "John Doe",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Data Science Mastery",
            description:
                "A comprehensive course covering Python, machine learning, data visualization, and real-world data analysis projects.",
            price: 7999,
            category: "Data Science",
            author: "Dr. Emily Carter",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Digital Marketing 101",
            description:
                "Learn the essentials of SEO, social media marketing, content strategy, and analytics to grow your online presence.",
            price: 2999,
            category: "Marketing",
            author: "Samantha Green",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "UI/UX Design Bootcamp",
            description:
                "Master user interface and user experience design with tools like Figma and Adobe XD, and learn design principles for real-world projects.",
            price: 3999,
            category: "Design",
            author: "Michael Brown",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cloud Computing Basics",
            description:
                "Understand the fundamentals of cloud computing, including AWS, Azure, and Google Cloud, to kickstart your cloud career.",
            price: 4599,
            category: "Cloud Computing",
            author: "Alice Johnson",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Mobile App Development with Flutter",
            description:
                "Create cross-platform mobile applications using Flutter, Dart, and Firebase. Perfect for beginners and experienced developers alike.",
            price: 5499,
            category: "App Development",
            author: "Chris Wilson",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cybersecurity Fundamentals",
            description:
                "Learn how to protect systems, networks, and data from cyber threats with hands-on labs and real-world scenarios.",
            price: 4999,
            category: "Cybersecurity",
            author: "Sophia Taylor",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Photography Essentials",
            description:
                "Discover photography techniques, camera settings, and editing tips to capture stunning photos.",
            price: 1999,
            category: "Photography",
            author: "James Anderson",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Business Analytics with Excel",
            description:
                "Use Excel to analyze business data, create dashboards, and generate insights for data-driven decision-making.",
            price: 3499,
            category: "Business",
            author: "Rebecca Lee",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Game Development with Unity",
            description:
                "Build engaging 2D and 3D games using Unity and C#. Includes asset creation and game mechanics development.",
            price: 6999,
            category: "Game Development",
            author: "Liam Martinez",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Full-Stack Web Development",
            description:
                "Learn how to build dynamic websites and applications using modern web technologies such as React, Node.js, MongoDB, and Express.",
            price: 4999,
            category: "Web Development",
            author: "John Doe",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Data Science Mastery",
            description:
                "A comprehensive course covering Python, machine learning, data visualization, and real-world data analysis projects.",
            price: 7999,
            category: "Data Science",
            author: "Dr. Emily Carter",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Digital Marketing 101",
            description:
                "Learn the essentials of SEO, social media marketing, content strategy, and analytics to grow your online presence.",
            price: 2999,
            category: "Marketing",
            author: "Samantha Green",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "UI/UX Design Bootcamp",
            description:
                "Master user interface and user experience design with tools like Figma and Adobe XD, and learn design principles for real-world projects.",
            price: 3999,
            category: "Design",
            author: "Michael Brown",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cloud Computing Basics",
            description:
                "Understand the fundamentals of cloud computing, including AWS, Azure, and Google Cloud, to kickstart your cloud career.",
            price: 4599,
            category: "Cloud Computing",
            author: "Alice Johnson",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Mobile App Development with Flutter",
            description:
                "Create cross-platform mobile applications using Flutter, Dart, and Firebase. Perfect for beginners and experienced developers alike.",
            price: 5499,
            category: "App Development",
            author: "Chris Wilson",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cybersecurity Fundamentals",
            description:
                "Learn how to protect systems, networks, and data from cyber threats with hands-on labs and real-world scenarios.",
            price: 4999,
            category: "Cybersecurity",
            author: "Sophia Taylor",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Photography Essentials",
            description:
                "Discover photography techniques, camera settings, and editing tips to capture stunning photos.",
            price: 1999,
            category: "Photography",
            author: "James Anderson",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Business Analytics with Excel",
            description:
                "Use Excel to analyze business data, create dashboards, and generate insights for data-driven decision-making.",
            price: 3499,
            category: "Business",
            author: "Rebecca Lee",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Game Development with Unity",
            description:
                "Build engaging 2D and 3D games using Unity and C#. Includes asset creation and game mechanics development.",
            price: 6999,
            category: "Game Development",
            author: "Liam Martinez",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Full-Stack Web Development",
            description:
                "Learn how to build dynamic websites and applications using modern web technologies such as React, Node.js, MongoDB, and Express.",
            price: 4999,
            category: "Web Development",
            author: "John Doe",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Data Science Mastery",
            description:
                "A comprehensive course covering Python, machine learning, data visualization, and real-world data analysis projects.",
            price: 7999,
            category: "Data Science",
            author: "Dr. Emily Carter",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Digital Marketing 101",
            description:
                "Learn the essentials of SEO, social media marketing, content strategy, and analytics to grow your online presence.",
            price: 2999,
            category: "Marketing",
            author: "Samantha Green",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "UI/UX Design Bootcamp",
            description:
                "Master user interface and user experience design with tools like Figma and Adobe XD, and learn design principles for real-world projects.",
            price: 3999,
            category: "Design",
            author: "Michael Brown",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cloud Computing Basics",
            description:
                "Understand the fundamentals of cloud computing, including AWS, Azure, and Google Cloud, to kickstart your cloud career.",
            price: 4599,
            category: "Cloud Computing",
            author: "Alice Johnson",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Mobile App Development with Flutter",
            description:
                "Create cross-platform mobile applications using Flutter, Dart, and Firebase. Perfect for beginners and experienced developers alike.",
            price: 5499,
            category: "App Development",
            author: "Chris Wilson",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cybersecurity Fundamentals",
            description:
                "Learn how to protect systems, networks, and data from cyber threats with hands-on labs and real-world scenarios.",
            price: 4999,
            category: "Cybersecurity",
            author: "Sophia Taylor",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Photography Essentials",
            description:
                "Discover photography techniques, camera settings, and editing tips to capture stunning photos.",
            price: 1999,
            category: "Photography",
            author: "James Anderson",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Business Analytics with Excel",
            description:
                "Use Excel to analyze business data, create dashboards, and generate insights for data-driven decision-making.",
            price: 3499,
            category: "Business",
            author: "Rebecca Lee",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Game Development with Unity",
            description:
                "Build engaging 2D and 3D games using Unity and C#. Includes asset creation and game mechanics development.",
            price: 6999,
            category: "Game Development",
            author: "Liam Martinez",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Full-Stack Web Development",
            description:
                "Learn how to build dynamic websites and applications using modern web technologies such as React, Node.js, MongoDB, and Express.",
            price: 4999,
            category: "Web Development",
            author: "John Doe",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Data Science Mastery",
            description:
                "A comprehensive course covering Python, machine learning, data visualization, and real-world data analysis projects.",
            price: 7999,
            category: "Data Science",
            author: "Dr. Emily Carter",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Digital Marketing 101",
            description:
                "Learn the essentials of SEO, social media marketing, content strategy, and analytics to grow your online presence.",
            price: 2999,
            category: "Marketing",
            author: "Samantha Green",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "UI/UX Design Bootcamp",
            description:
                "Master user interface and user experience design with tools like Figma and Adobe XD, and learn design principles for real-world projects.",
            price: 3999,
            category: "Design",
            author: "Michael Brown",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cloud Computing Basics",
            description:
                "Understand the fundamentals of cloud computing, including AWS, Azure, and Google Cloud, to kickstart your cloud career.",
            price: 4599,
            category: "Cloud Computing",
            author: "Alice Johnson",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Mobile App Development with Flutter",
            description:
                "Create cross-platform mobile applications using Flutter, Dart, and Firebase. Perfect for beginners and experienced developers alike.",
            price: 5499,
            category: "App Development",
            author: "Chris Wilson",
            stars: 4.8,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Cybersecurity Fundamentals",
            description:
                "Learn how to protect systems, networks, and data from cyber threats with hands-on labs and real-world scenarios.",
            price: 4999,
            category: "Cybersecurity",
            author: "Sophia Taylor",
            stars: 4.7,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Photography Essentials",
            description:
                "Discover photography techniques, camera settings, and editing tips to capture stunning photos.",
            price: 1999,
            category: "Photography",
            author: "James Anderson",
            stars: 4.6,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Business Analytics with Excel",
            description:
                "Use Excel to analyze business data, create dashboards, and generate insights for data-driven decision-making.",
            price: 3499,
            category: "Business",
            author: "Rebecca Lee",
            stars: 4.5,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        {
            name: "Game Development with Unity",
            description:
                "Build engaging 2D and 3D games using Unity and C#. Includes asset creation and game mechanics development.",
            price: 6999,
            category: "Game Development",
            author: "Liam Martinez",
            stars: 4.9,
            thumbnail:
                "https://random-image-pepebigotes.vercel.app/api/random-image",
        },
        // Randomly generated additional courses for each category
        // ...Array.from({ length: 50 }, (_, i) => ({
        //     name: `Course ${i + 11}`,
        //     description: `This is a random description for Course ${
        //         i + 11
        //     }. It offers an exciting journey into ${
        //         i % 2 === 0 ? "advanced" : "beginner"
        //     } topics.`,
        //     price: Math.floor(Math.random() * 8000) + 1500,
        //     category: [
        //         "Web Development",
        //         "Data Science",
        //         "Marketing",
        //         "Design",
        //         "Cloud Computing",
        //         "App Development",
        //         "Cybersecurity",
        //         "Photography",
        //         "Business",
        //         "Game Development",
        //     ][Math.floor(Math.random() * 10)],
        //     author: `Author ${String.fromCharCode(65 + (i % 26))}`,
        //     stars: (Math.random() * 2 + 3).toFixed(1),
        //     thumbnail:
        //         "https://random-image-pepebigotes.vercel.app/api/random-image",
        // })),
    ];

    const [activeCategory, setActiveCategory] = useState("Photography");
    return (
        <div className="w-auto border border-gray-950">
            <div className=" h-fit  border-blue-500 border overflow-hidden">
                {/* Categorys... Tab Container... */}
                <div
                    className="space-x-2 flex  max-w-full"
                    id="student_course_card_Category_container"
                >
                    {categories?.map((elem, idx) => (
                        <h1
                            className={` hover:bg-lime-600 hover:text-gray-100 px-5  py-2 rounded-lg 
                            font-normal
                            text-sm
                            cursor-pointer transition-all delay-200 w-fit flex-shrink-0 ${
                                activeCategory === elem.name
                                    ? "  bg-lime-600 text-gray-100"
                                    : "bg-transparent text-gray-700"
                            }`}
                            onClick={() => setActiveCategory(elem.name)}
                        >
                            {elem.name}
                        </h1>
                    ))}
                </div>
                {/* Courses Card Container */}
            </div>
            <div className="my-6  inline-flex flex-wrap  gap-y-4 max-w-[80vw] justify-between  border border-red-500 pb-16 ">
                {courses?.map((elem, idx) => {
                    if (elem?.category === activeCategory) {
                        return <Student_Discover_Course_Card course={elem} />;
                    }
                })}
            </div>
        </div>
    );
}

export default Student_Discover_Course_Index;
