import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from "vite-plugin-mock";

const path = require('path');


// https://vitejs.dev/config/
export default ({ mode }) => {
  //根据环境
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [vue(), vueJsx(), viteMockServe({
      mockPath: 'mock',
      localEnabled: env.VITE_APP_COMMAND === 'serve',
      prodEnabled: env.VITE_APP_COMMAND !== 'serve' && env.VITE_APP_COMMAND === 'build',
      //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
      import { setupProdMockServer } from '../mock/mockProdServer';
      setupProdMockServer();
    `,
    })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      }
    }
  })
}
