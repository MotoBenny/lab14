/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableRows = document.querySelector('tbody tr');
  tableRows.remove();
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let tbody = document.getElementsByTagName('tbody');
  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cart.length; i++) {
    // DONE: Create a TR
    let trEl = document.createElement('tr');
    tbody.appendChild(trEl);
    // DONE: Create a TD for the delete link, quantity,  and the item
    let tdDelete = document.createElement('td');
    tdDelete.textContent = 'x';
    trEl.appendChild(tdDelete);
    let tdQuantity = document.createElement('td');
    tdQuantity.textContent = cart.items[i].quantity;
    trEl.appendChild(tdQuantity);
    let tdItem = document.createElement('td');
    tdItem.textContent = cart.items[i].product;

  }
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  event.preventDefault();
  cart.removeItem(item);
  cart.saveToLocalStorage();
  renderCart();
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
