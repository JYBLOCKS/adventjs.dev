type Inventory = Array<
  { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  // Code here
  return inventory.reduce((acc, cur) => {
    acc[cur.category] = acc[cur.category] || {};
    acc[cur.category][cur.name] = (acc[cur.category][cur.name] || 0) + cur.quantity;
    return acc
  }, {});
}