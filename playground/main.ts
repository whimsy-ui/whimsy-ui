import { createApp } from 'vue';
// @ts-ignore
import WhimsyUI from 'whimsy-ui';
import 'whimsy-ui/dist/index.css';
(async () => {
  const apps = import.meta.glob('./src/*.vue');
  const name = window.location.pathname.replace(/^\//, '') || 'App';
  const file = apps[`./src/${name}.vue`];

  if (!file) {
    window.location.pathname = 'App';
    return;
  }
  const App = (await file()).default;

  createApp(App).use(WhimsyUI).mount('#play');
})();
