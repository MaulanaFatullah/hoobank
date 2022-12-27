import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// import reactRefresh from '@vitejs/plugin-react-refresh'
// import path from 'path'

// This will allow us to refer to paths as
// |
// |
// |
// V
// import x from '@/component/x'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hoobank/',
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
  // plugins: [reactRefresh()]

})
