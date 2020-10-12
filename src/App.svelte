<script>
  let items = [
    {id: 1, name: "Masker Covid Premium", qty: 1, price: 150000},
    {id: 2, name: "Masker Covid Bronze", qty: 2, price: 50000},
  ];

  $: total = items.reduce(function(acc, {qty, price}){
    return acc + (qty * price);
  }, 0);
</script>

<h1>Hello World!</h1>
<main>
  <h1>Shopping Cart</h1>
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

