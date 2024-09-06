export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){

    let selector = document.querySelector(`.js-quantity-selector-${productId}`);
     
    let innerValue =
    Number(selector.value);
  
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchingItem = cartItem;
    }
  }); 
  
  if(matchingItem){
    matchingItem.quantity += innerValue;
  }else{
    cart.push({
     productId,
      quantity: innerValue
     });
  }

  saveToStorage();
  }

 export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });

    cart = newCart;

    saveToStorage();
  }