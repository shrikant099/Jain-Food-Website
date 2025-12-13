// "use client" NOT required here (this is plain JS)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {}
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            const key = item.name;
            if (!state.items[key]) {
                state.items[key] = { ...item, qty: 1 };
            } else {
                state.items[key].qty += 1;
            }
        },
        removeItem(state, action) {
            const item = action.payload;
            const key = item.name;
            if (!state.items[key]) return;
            if (state.items[key].qty <= 1) {
                delete state.items[key];
            } else {
                state.items[key].qty -= 1;
            }
        },
        setItemQty(state, action) {
            const { name, qty } = action.payload;
            if (!state.items[name]) return;
            if (qty <= 0) delete state.items[name];
            else state.items[name].qty = qty;
        },
        clearCart(state) {
            state.items = {};
        }
    }
});

export const { addItem, removeItem, setItemQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
