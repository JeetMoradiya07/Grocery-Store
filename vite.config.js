import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use './src/_variables.scss' as *;`, // Use @use instead of @import
            },
        },
    },
    server: {
        host: true,
        port: 777,
    },
});
