import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // server: {
    //     host: "192.168.1.21", // Accept connections from any IP address
    //     port: 5555, // You can specify a different port if needed
    // },
});
