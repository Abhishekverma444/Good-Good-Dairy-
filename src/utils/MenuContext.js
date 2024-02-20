import React, { createContext, useState } from 'react';

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [itemNo, setItemNo] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (menuItem) => {
    setCartItems({ ...cartItems, [itemNo]: menuItem });
    setItemNo(itemNo + 1);
    setItemCount(itemCount + 1);
  };

  const removeItem = (itemId) => {
    const newCartItems = { ...cartItems };
    delete newCartItems[itemId];
    setCartItems(newCartItems);
    setItemCount(itemCount - 1);
  };

  const clearCart = () => {
    setCartItems({});
    setItemCount(0);
  };




  return (
    <MenuContext.Provider value={{ cartItems, addToCart, removeItem, itemCount, clearCart }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
