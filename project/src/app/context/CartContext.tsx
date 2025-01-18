"use client"
import React, { createContext, useContext, useState } from "react";

interface CartItem {
  productName: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.productName === item.productName);
      if (existingItem) {
        return prevCart.map((i) =>
          i.productName === item.productName
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.productName !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productName === productName ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
