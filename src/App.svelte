<script>
  import { addItem } from './util.js';
  export let items = [];

  $: total = items.reduce(function(acc, {qty, price}){
    return acc + (qty * price);
  }, 0);

  function handleClickNewItem() {
    items = addItem(items);
  }
  function handleIncrement(index) {
    items[index].qty += 1;
  }
</script>

<main>
  <h1>Shopping Cart</h1>
  <button on:click={handleClickNewItem}>New Item</button>
  <ul>
    {#each items as item, index}
    <li>
      <span>{item.name}</span>
      <span>{item.price}</span>
      <span><input type="number" name="qty" bind:value={item.qty}/></span>
      <span><button on:click={() => handleIncrement(index)}>+</button></span>
    </li>
    {/each}
    <li>
      <span>TOTAL: <strong>Rp. {total}</strong></span>
    </li>
  </ul>
</main>

