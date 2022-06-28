/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
let state = {
  storeItems: [
    {
      id: 1, 
      name: "beetroot",
      price: 0.35, 
      inCart: true,
    },
    {
      id: 1, 
      name: "carrot",
      price: 0.35, 
      inCart: true,
    },
    {
      id: 1, 
      name: "apple",
      price: 0.35, 
      inCart: false,
    },
  ]
}

function increaseQuantity() {}

function decreaseQuantity() {}

function renderHeader() {}

function renderMain() {}

function render() {
  document.body.textContent = ''
}

function renderStoreItems() {
  let storeUl = document.querySelector('.store--item-list')
  storeUl.textContent = ''
}

function renderCartItem() {

}

function renderTotal() {

}

function render() {
  renderStoreItems()
  renderCartItem()
  renderTotal()
}


