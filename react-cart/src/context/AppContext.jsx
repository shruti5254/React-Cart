import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);         // null = logged out
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState({});
  const [cartItems, setCartItems] = useState([]);
  // --- NEW: wishlist is an array of product objects ---
  const [wishlistItems, setWishlistItems] = useState([]);

  // ── Cart helpers ──────────────────────────────────────────
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQty = (id, quantity) => {
    setCartItems((prev) => {
      if (quantity <= 0) return prev.filter((item) => item.id !== id);
      return prev.map((item) => (item.id === id ? { ...item, quantity } : item));
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // ── Wishlist helpers ──────────────────────────────────────
  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev; // already in list
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  // Move all wishlist items to cart
  const moveAllToCart = () => {
    wishlistItems.forEach((product) => addToCart(product));
    setWishlistItems([]);
  };

  const wishlistCount = wishlistItems.length;

  const value = {
    navigate,
    user, setUser,
    isSeller, setIsSeller,
    showUserLogin, setShowUserLogin,
    products, setProducts,
    cartItems, setCartItems,
    addToCart, updateCartQty, removeFromCart, cartCount,
    wishlistItems, setWishlistItems,
    addToWishlist, removeFromWishlist, isInWishlist,
    moveAllToCart, wishlistCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
