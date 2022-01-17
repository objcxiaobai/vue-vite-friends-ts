import { createApp } from 'vue'
import App from './App.vue'

import { setupProdMockServer } from '../mock/mockProdServer';

if (import.meta.env.VITE_APP_COMMAND === 'build') {
    setupProdMockServer();
}
createApp(App).mount('#app')
