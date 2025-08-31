// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Electron에서 파일을 로드할 경로를 설정
  base: './', 
});