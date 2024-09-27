// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public/dist', // Ensure this matches the remix.config.js output
    rollupOptions: {
      input: {
        main: 'src/main.jsx', // Adjust according to your entry point
      },
    },
  },
});