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

export const deleteItemFromCart = (cartItems, id) => {
  const itemFound = cartItems.filter((item) => item.id === id);
  if (itemFound) {
    if (itemFound[0].qty > 0) {
      return cartItems.map((item) => {
        return item.id === id ? { ...item, qty: item.qty - 1 } : item;
      });
    } else {
      return cartItems.filter((item) => item.id !== id);
    }
  }
};
