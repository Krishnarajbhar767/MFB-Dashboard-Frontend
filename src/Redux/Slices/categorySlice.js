import { createSlice } from "@reduxjs/toolkit";

// Predefined categories with static unique IDs
const initialState = {
    categories: [
        { id: "cat-001", label: "Web Development", value: "web-development" },
        { id: "cat-002", label: "Graphic Design", value: "graphic-design" },
        { id: "cat-003", label: "SEO Optimization", value: "seo-optimization" },
        {
            id: "cat-004",
            label: "Digital Marketing",
            value: "digital-marketing",
        },
        { id: "cat-005", label: "Content Writing", value: "content-writing" },
        { id: "cat-006", label: "UI/UX Design", value: "ui-ux-design" },
        { id: "cat-007", label: "Video Editing", value: "video-editing" },
        { id: "cat-008", label: "Photography", value: "photography" },
        {
            id: "cat-009",
            label: "Business Strategy",
            value: "business-strategy",
        },
        { id: "cat-010", label: "Branding", value: "branding" },
        {
            id: "cat-011",
            label: "Social Media Management",
            value: "social-media-management",
        },
        {
            id: "cat-012",
            label: "Mobile App Development",
            value: "mobile-app-development",
        },
        { id: "cat-013", label: "Email Marketing", value: "email-marketing" },
        {
            id: "cat-014",
            label: "E-commerce Solutions",
            value: "e-commerce-solutions",
        },
        {
            id: "cat-015",
            label: "Affiliate Marketing",
            value: "affiliate-marketing",
        },
        { id: "cat-016", label: "Cyber Security", value: "cyber-security" },
        {
            id: "cat-017",
            label: "Blockchain Development",
            value: "blockchain-development",
        },
        { id: "cat-018", label: "Data Science", value: "data-science" },
        {
            id: "cat-019",
            label: "AI & Machine Learning",
            value: "ai-machine-learning",
        },
        { id: "cat-020", label: "Cloud Computing", value: "cloud-computing" },
        { id: "cat-021", label: "Software Testing", value: "software-testing" },
        { id: "cat-022", label: "Game Development", value: "game-development" },
        { id: "cat-023", label: "3D Animation", value: "3d-animation" },
        {
            id: "cat-024",
            label: "Product Management",
            value: "product-management",
        },
        {
            id: "cat-025",
            label: "Technical Writing",
            value: "technical-writing",
        },
        { id: "cat-026", label: "Customer Support", value: "customer-support" },
        { id: "cat-027", label: "Podcasting", value: "podcasting" },
        {
            id: "cat-028",
            label: "Influencer Marketing",
            value: "influencer-marketing",
        },
        { id: "cat-029", label: "Public Relations", value: "public-relations" },
        { id: "cat-030", label: "HR & Recruiting", value: "hr-recruiting" },
    ],
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            if (state.categories.length < 30) {
                const { label, id } = action.payload;
                state.categories.push({
                    id, // Expecting user to provide a unique static ID
                    label,
                    value: label.toLowerCase().replace(/\s+/g, "-"),
                });
            }
        },
        resetCategories: (state) => {
            state.categories = initialState.categories;
        },
    },
});

export const { addCategory, resetCategories } = categorySlice.actions;
export default categorySlice.reducer;
