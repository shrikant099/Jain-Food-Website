export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
    Object.values(state.cart.items).reduce((sum, it) => sum + (it.qty || 0), 0);
export const selectCartTotal = (state) =>
    Object.values(state.cart.items).reduce((sum, it) => sum + (it.qty || 0) * (it.price || 0), 0);
