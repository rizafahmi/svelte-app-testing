import App from './App.svelte';

let items = [
  {id: 1, name: "Masker Covid Premium", qty: 1, price: 150000},
  {id: 2, name: "Masker Covid Bronze", qty: 2, price: 50000},
];

const app = new App({
  target: document.body,
  props: {items}
});

export default app;
