import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Truck, Check, Tag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
    setIsCheckoutOpen,
    setActivePage
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 75;
  const progressPercent = Math.min(100, Math.round((cartTotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const discountAmount = Math.round(cartTotal * (discountPercent / 100));
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'MUDDASIR30' || code === 'NOVA30') {
      setDiscountPercent(30);
      setPromoSuccess('30% VIP discount applied!');
      setPromoError('');
    } else if (code === 'MUDDASIR10' || code === 'NOVAGEAR10') {
      setDiscountPercent(10);
      setPromoSuccess('10% insider coupon applied!');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try "MUDDASIR30"');
      setPromoSuccess('');
    }
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-out Sidebar Panel */}
      <div
        id="cart-drawer-panel"
        className="relative w-full max-w-md bg-[#071126] text-white h-full shadow-2xl flex flex-col z-10 border-l border-white/10 animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-bold text-white">Your Cart</h2>
            <span className="text-xs bg-blue-600/30 text-blue-400 px-2 py-0.5 rounded-full font-bold border border-blue-500/30">
              {cart.reduce((s, i) => s + i.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#0B1630] border-b border-white/10">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="flex items-center gap-1.5 text-[#B8C2D9]">
              <Truck className="w-3.5 h-3.5 text-blue-400" />
              {amountToFreeShipping > 0 ? (
                <span>Add <strong className="text-white font-bold">${amountToFreeShipping}.00</strong> more for Free Shipping</span>
              ) : (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Qualified for FREE Express Delivery!
                </span>
              )}
            </span>
            <span className="font-semibold text-blue-400">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List / Empty State */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Your cart is empty</h3>
              <p className="text-sm text-[#8E9AB5] max-w-xs mb-6">
                Looks like you haven't added any tech gear yet. Explore our top-rated collections.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setActivePage('shop');
                }}
                className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#2563FF] to-[#7C4DFF] hover:opacity-95 shadow-md shadow-blue-500/20 transition-all text-sm"
              >
                Browse Products
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 p-3.5 bg-[#0B1630] rounded-2xl border border-white/5 hover:border-white/15 transition-all"
              >
                <div className="w-18 h-18 sm:w-20 sm:h-20 bg-white rounded-xl p-2 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">
                    {item.product.name}
                  </h4>
                  {item.selectedColor && (
                    <span className="text-[11px] text-[#8E9AB5] block">
                      Color: {item.selectedColor}
                    </span>
                  )}
                  <div className="text-sm font-extrabold text-blue-400 mt-1">
                    ${item.product.price}.00
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-white/15 rounded-lg bg-[#071126]">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="p-1 text-gray-400 hover:text-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2 text-xs font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="p-1 text-gray-400 hover:text-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-500 hover:text-rose-400 transition-colors p-1"
                      aria-label={`Remove ${item.product.name}`}
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Calculations & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-white/10 bg-[#0B1630] space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={applyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder='Code: MUDDASIR30'
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-[#071126] border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 text-xs font-bold bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors"
              >
                Apply
              </button>
            </form>
            {promoSuccess && <span className="text-[11px] text-emerald-400 font-medium block">{promoSuccess}</span>}
            {promoError && <span className="text-[11px] text-rose-400 font-medium block">{promoError}</span>}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#B8C2D9]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-white">${cartTotal}.00</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Promo Discount ({discountPercent}%)</span>
                  <span>-${discountAmount}.00</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-white">
                  {amountToFreeShipping === 0 ? 'FREE' : '$9.99'}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-white/10">
                <span>Estimated Total</span>
                <span className="text-blue-400">
                  ${finalTotal + (amountToFreeShipping === 0 ? 0 : 9.99)}.00
                </span>
              </div>
            </div>

            {/* Checkout & Continue Shopping */}
            <div className="space-y-2 pt-1">
              <button
                id="cart-checkout-btn"
                onClick={handleCheckoutClick}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#2563FF] via-[#5B3BF5] to-[#7C4DFF] hover:opacity-95 shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-[#8E9AB5] hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
