import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//setup
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
//mock
import { viteMockServe } from "vite-plugin-mock";
//跨域访问
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./src/mock", // 设置模拟.ts 文件的存储文件夹
      enable: true,
      logger: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5096', // 目标服务器地址
        changeOrigin: true, // 是否改变源地址
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径
      }
    }
  }

})
