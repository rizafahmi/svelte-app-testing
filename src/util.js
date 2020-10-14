  export function addItem(items) {
    const newId = items.length + 1;
    return [...items, {id: newId, name: `Masker ${newId}`, qty: newId, price: newId * 1000}]
  }
