import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import components from "unplugin-vue-components/vite"
import {VantResolver} from "unplugin-vue-components/resolvers"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers:[VantResolver()],
    })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"src")
    }
  }
})
