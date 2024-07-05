import React, { createContext, useState, ReactNode, useContext } from "react";
import { CartItem } from "./models/Product";

interface CartContextType {
  cartCount: number;
  clearCart: () => void;
  updateCart: () => void;
}

// Create the context with an undefined default value
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
  const getCartCount = (): number => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");

    let numberOfProducts = 0;
    cart.forEach((product) => {
      numberOfProducts += product.quantity;
    });
    return numberOfProducts;
  };

  const [cartCount, setCartCount] = useState(getCartCount());

  const updateCart = (): void => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
    let numberOfProducts = 0;
    cart.forEach((product) => {
      numberOfProducts += product.quantity;
    });
    setCartCount(numberOfProducts);
  };

  const clearCart = (): void => {
    setCartCount(0);
  };

  return <CartContext.Provider value={{ cartCount, clearCart, updateCart }}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
