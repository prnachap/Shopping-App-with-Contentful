export const cartCount = (items) => {
  return items.reduce((total, item) => {
    return total + item.qty;
  }, 0);
};

export const totalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);
};
