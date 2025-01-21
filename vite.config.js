import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/misronconsulting/', // Set the base path for the app
  plugins: [react()],
});

