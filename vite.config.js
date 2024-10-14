import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
// import {createRequire} from "module";

// const require = createRequire(import.meta.url);

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/_variables.scss';`, // Automatically includes variables
            },
        },
    },
    server: {
        host: true,
        port: 7777,
    },
});
