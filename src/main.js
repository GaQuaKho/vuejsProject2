import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router';
import FooterStore  from './store/StoreFooter';
import StorePortfolio from './store/StorePortfolio';
import StoreBlog from './store/StoreBlog';
import { createStore } from 'vuex';

const store = createStore({
    modules:{
        FooterStore: FooterStore,
        StorePortfolio: StorePortfolio,
        StoreBlog
    }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
