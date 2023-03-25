import { createApp } from 'vue';
import 'uno.css';
// @ts-ignore
// import 'whimsy-ui/dist/index.css';
(async () => {
  const apps = import.meta.glob('./src/*.vue');
  const name = window.location.pathname.replace(/^\//, '') || 'App';
  const file = apps[`./src/${name}.vue`];

  if (!file) {
    window.location.pathname = 'App';
    return;
  }
  const App = ((await file()) as any).default;

  createApp(App).mount('#play');
})();
