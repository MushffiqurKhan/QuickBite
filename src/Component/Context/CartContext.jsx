import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...food, quantity: 1 }];
      }
    });
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};
//   console.log("Cart State:", cart);
//   console.log("Total Items:", totalItems);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems, increaseQty,
    decreaseQty,
    removeFromCart, }}>
      {children}
    </CartContext.Provider>
  );
};