// 这是开发环境 配置目录


/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  
  export default component
}

//vue3 报错解决：找不到模块‘xxx.vue’或其相应的类型声明。（Vue 3 can not find module）
//https://www.cnblogs.com/JasmineHan/p/13673560.html
declare module '*.tsx' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  
  export default componentOptions
}



interface ImportMetaEnv {
  readonly VITE_APP_EV: boolean,
  readonly VITE_APP_COMMAND: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}