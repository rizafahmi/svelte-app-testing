<script>
  export let items = [];

  $: total = items.reduce(function(acc, {qty, price}){
    return acc + (qty * price);
  }, 0);

  function addItem() {
    const newId = items.length + 1;
    items = [...items, {id: newId, name: `Masker ${newId}`}]
  }

  function handleClickNewItem() {
    addItem();
  }
</script>

<main>
  <h1>Shopping Cart</h1>
  <button on:click={handleClickNewItem}>New Item</button>
  <ul>
    {#each items as item}
    <li>
      <span>{item.name}</span>
      <span>{item.price}</span>
      <span><input type="number" name="qty" bind:value={item.qty}/></span>
    </li>
    {/each}
    <li>
      <span>TOTAL: <strong>Rp. {total}</strong></span>
    </li>
  </ul>
</main>

