import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'styles/style.css';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});