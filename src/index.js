import App from "./App.svelte";
import './main.css';

var app = new App({
  target: document.body,
});

export default app;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
