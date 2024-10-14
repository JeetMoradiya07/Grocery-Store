import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path module
import {fileURLToPath} from "url"; // Import fileURLToPath
import {dirname} from "path"; // Import dirname

const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = dirname(__filename); // Get the directory name

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
