import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: "/portfoilio-web/", // Replace with your repository name
    plugins: [react()],
});
