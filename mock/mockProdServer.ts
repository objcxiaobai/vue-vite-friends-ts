import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'


//https://juejin.cn/post/7032926228055556126
// const modules = import.meta.glob('./**/*.ts')
// const mockModules: any[] = [];
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });

import mockModules from './mock'

export function setupProdMockServer() {
    createProdMockServer([...mockModules])
}