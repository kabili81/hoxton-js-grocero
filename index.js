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
      img: 'assets/icons/001-beetroot.svg',
    },
    {
      id: 2, 
      name: "carrot",
      price: 0.35, 
      inCart: true,
      img: 'assets/icons/002-carrot.svg',
    },
    {
      id: 3, 
      name: "apple",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/003-apple.svg',
    },
    {
      id: 4, 
      name: "apricot",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/004-apricot.svg',
    },
    {
      id: 5, 
      name: "avocado",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/005-avocado.svg',
    },
    {
      id: 6, 
      name: "bananas",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/006-bananas.svg',
    },
    {
      id: 7, 
      name: "bell-pepper",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/007-bell-pepper.svg',
    },
    {
      id: 8, 
      name: "berry",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/008-berry.svg',
    },
    {
      id: 9, 
      name: "blueberry",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/009-blueberry.svg',
    },
    {
      id: 10, 
      name: "eggplant",
      price: 0.35, 
      inCart: false,
      img: 'assets/icons/010-eggplant.svg',
    },

  ],
}

function getItemImagePath() {}

function getTotal() {}

function increaseQuantity() {}

function decreaseQuantity() {}




function renderStoreItems() {
  let storeUl = document.querySelector('.store--item-list')
  storeUl.textContent = ''
  
  for (let storeItem of state.storeItems) {
    let liEl = document.createElement('li')
    storeUl.append(liEl)
    let divEl = document.createElement('div')
    liEl.append(divEl)
    divEl.className = 'store--item-icon'
    let imgEl = document.createElement('img')
    divEl.append(imgEl)
    imgEl.src = storeItem.img
    let buttonEl = document.createElement('button')
    liEl.append(buttonEl)
    buttonEl.textContent = 'Add to cart'
  }
//   <li>
//   <div class="store--item-icon">
//    <img src="assets/icons/001-beetroot.svg" alt="beetroot" />
//  </div>
//   <button>Add to cart</button>
// </li>

}

function renderCartItems() {
let cartUL = document.querySelector('.cart--item-list')
cartUL.textContent = ''  
// gjetja e elemteve html cart--item-list
// fshirja elementeve storeUl.textContent = ''
let liEl = document.createElement('li')
cartUL.append(liEl)
let imgEl = document.createElement('img')
liEl.append(imgEl)
imgEl.className = 'cart--item-list'
imgEl.src = cartItem.img
let pEl = document.createElement('p')
liEl.append(pEl)
pEl.textContent = 'Beetroot'
let buttonRemoveEl = document.createElement('button')
liEl.append(buttonRemoveEl)
let spanEl = document.createElement('span')
liEl.append(spanEl)
let buttonAddEl = document.createElement('button')
liEl.append(buttonAddEl)

/* <li>
  <img
    class="cart--item-icon"
    src="assets/icons/001-beetroot.svg
    alt="beetroot"
  />
  <p>beetroot</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">1</span>
  <button class="quantity-btn add-btn center">+</button>
</li> */
}

function renderTotal() {

}

function render() {
 
  renderStoreItems()
  renderCartItem()
  renderTotal()
}

render()

