// vite.config.js
import crypto from 'crypto';

if (!crypto.hash) {
  crypto.hash = (algo, data) => {
    return crypto.createHash(algo).update(data).digest('hex');
  };
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
