import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { CiTrash } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { productsData } from "../data/productsData";

// "Just For You" shows a small curated grid below the wishlist
const justForYou = productsData.slice(0, 4);

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart, moveAllToCart, navigate } =
    useContext(AppContext);

  return (
    <div className="custom-container mx-auto w-full py-10 min-h-[60vh]">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-[var(--color-accentbkp)] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[var(--text)] font-medium">Wishlist</span>
      </nav>

      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-6">
        <h6 className="font-semibold text-base !text-base">
          Wishlist ({wishlistItems.length})
        </h6>
        {wishlistItems.length > 0 && (
          <button
            onClick={moveAllToCart}
            className="px-6 py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Move All To Bag
          </button>
        )}
      </div>

      {/* ── Wishlist grid ── */}
      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <p className="text-2xl font-semibold text-gray-400">Your wishlist is empty</p>
          <p className="text-gray-400 text-sm">Save items you love by clicking the heart icon.</p>
          <button
            onClick={() => navigate("/")}
            className="px-10 py-3 rounded text-white bg-[var(--color-accentbkp)] hover:opacity-90 transition-opacity cursor-pointer"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {wishlistItems.map((item) => (
            <WishlistCard
              key={item.id}
              item={item}
              onRemove={() => removeFromWishlist(item.id)}
              onAddToCart={() => {
                addToCart(item);
                removeFromWishlist(item.id);
              }}
            />
          ))}
        </div>
      )}

      {/* ── Just For You section ── */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-5">
          {/* Section label — matches site's Titles component style */}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[var(--color-accentbkp)] font-semibold pl-4 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:bg-[var(--color-accentbkp)] before:h-full">
              Just For You
            </span>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="px-5 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors cursor-pointer"
          >
            See All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {justForYou.map((product) => (
            <RecommendCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Wishlist item card ──────────────────────────────────── */
const WishlistCard = ({ item, onRemove, onAddToCart }) => (
  <div className="relative group overflow-hidden rounded">
    {/* Image area */}
    <div className="relative flex items-center justify-center h-[190px] bg-[var(--backgroundbkp)] rounded mb-2 overflow-hidden">
      <img src={item.image} alt={item.title} className="w-full h-36 object-contain p-2" />

      {/* Discount tag */}
      {item.tagLeft && (
        <span className="absolute top-2 left-2 bg-[var(--color-accentbkp)] text-white text-[10px] uppercase px-2 py-1 rounded">
          {item.tagLeft}
        </span>
      )}

      {/* Delete icon */}
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-400 hover:text-[var(--color-accentbkp)] transition-colors"
        aria-label="Remove from wishlist"
      >
        <CiTrash size="1.2em" />
      </button>

      {/* Add to cart — slides up on hover */}
      <button
        onClick={onAddToCart}
        className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-xs py-2.5 flex items-center justify-center gap-2
                   translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
      >
        <PiShoppingCartThin size="1.1em" />
        Add To Cart
      </button>
    </div>

    {/* Text below image */}
    <p className="text-sm font-medium capitalize truncate">{item.title}</p>
    <div className="flex items-center gap-3 mt-1 text-sm">
      <span className="text-[var(--color-accentbkp)] font-semibold">{item.priceNew}</span>
      {item.priceOld && (
        <span className="text-gray-400 line-through text-xs">{item.priceOld}</span>
      )}
    </div>
  </div>
);

/* ── "Just For You" recommendation card ─────────────────── */
const RecommendCard = ({ product }) => {
  const { addToCart, addToWishlist, isInWishlist } = useContext(AppContext);
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="relative group overflow-hidden rounded">
      <div className="relative flex items-center justify-center h-[190px] bg-[var(--backgroundbkp)] rounded mb-2 overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-36 object-contain p-2" />

        {product.tagLeft && (
          <span className="absolute top-2 left-2 bg-[var(--color-accentbkp)] text-white text-[10px] uppercase px-2 py-1 rounded">
            {product.tagLeft}
          </span>
        )}

        <button
          onClick={() => wishlisted ? null : addToWishlist(product)}
          className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-400 hover:text-[var(--color-accentbkp)] transition-colors"
        >
          <CiHeart size="1.2em" />
        </button>

        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-xs py-2.5 flex items-center justify-center gap-2
                     translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
        >
          <PiShoppingCartThin size="1.1em" />
          Add To Cart
        </button>
      </div>

      <p className="text-sm font-medium capitalize truncate">{product.title}</p>
      <div className="flex items-center gap-3 mt-1 text-sm">
        <span className="text-[var(--color-accentbkp)] font-semibold">{product.priceNew}</span>
        {product.priceOld && (
          <span className="text-gray-400 line-through text-xs">{product.priceOld}</span>
        )}
      </div>
    </div>
  );
};

// Need the CiHeart for the RecommendCard — add import at top
export default Wishlist;
