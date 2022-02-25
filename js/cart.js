/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  console.log('Cart loaded');
  clearCart();
  console.log('Cart cleared');
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
// check if there is a TR to remove if remove else do nothing
function clearCart() {
  let tableRows = document.querySelector('tbody tr');

  if (tableRows) {
    tableRows.remove();
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let tbody = document.querySelector('tbody');
  // DONE: Iterate over the items in the cart
  for (let i = 0; i < Cart.length; i++) {
    // DONE: Create a TR
    let trEl = document.createElement('tr');
    tbody.appendChild(trEl);
    // DONE: Create a TD for the delete link, quantity,  and the item
    let tdDelete = document.createElement('td');
    tdDelete.textContent = 'x';
    trEl.appendChild(tdDelete);
    let tdQuantity = document.createElement('td');
    // our cart object has a nested array and we failed to index down to the value we were looking for. TOD 4:04.
    tdQuantity.textContent = Cart[0].items[0][i].quantity;
    console.log(tdQuantity);
    trEl.appendChild(tdQuantity);
    let tdItem = document.createElement('td');
    tdItem.textContent = Cart[i].product;
    console.log('cart rendered');
  }
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  event.preventDefault();
  Cart.removeItem(item);
  Cart.saveToLocalStorage();
  renderCart();
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
