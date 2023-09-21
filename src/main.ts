import "@picocss/pico";
import './i18n.js';
import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
