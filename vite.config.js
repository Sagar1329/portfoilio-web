import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: "/YOUR_REPOSITORY_NAME/", // Replace with your repository name
    plugins: [react()],
});
