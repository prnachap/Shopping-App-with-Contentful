export const addItemToCart = (cartItems, itemToAdd) => {
  const itemFound = cartItems.find((item) => item.id === itemToAdd.id);

  if (itemFound) {
    return cartItems.map((item) => {
      return item.id === itemToAdd.id ? { ...item, qty: item.qty + 1 } : item;
    });
  } else {
    return [...cartItems, { ...itemToAdd, qty: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const exsistingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (exsistingItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToRemove.id
        ? { ...cartItem, qty: cartItem.qty - 1 }
        : cartItem;
    });
  }
};
