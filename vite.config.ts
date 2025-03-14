import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  
import path from 'path';  

export default defineConfig({  
  base: './',  
  plugins: [react()],  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@icons': path.resolve(__dirname, './src/icons'),
    },
  },
  css: {  
    preprocessorOptions: {  
      scss: {  
        additionalData: `@use "@/styles/colors.scss" as *;`  
      }  
    }  
  }  
});  