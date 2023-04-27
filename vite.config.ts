import path from 'node:path';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

const name = 'my-lib-testrepo';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name,
      formats: ['es', 'umd'],
      fileName: (format) => `${name}.${format}.js`,
    },
    rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM'
            },
        }
    }
  }
})
