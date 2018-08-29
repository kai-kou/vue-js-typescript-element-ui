import Vue from 'vue';
import App from './App.vue';

import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/ja';

import locale from 'element-ui/lib/locale';
locale.use(lang);

// 全コンポーネントを読み込む場合
// import ElementUI from 'element-ui';
// Vue.use(ElementUI, { lang });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
