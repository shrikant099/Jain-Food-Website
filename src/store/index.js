// Client-side store configuration with redux-persist
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], 
};

const persistedReducer = persistReducer(persistConfig, cartReducerWrapper());

function cartReducerWrapper() {
    const { combineReducers } = require("@reduxjs/toolkit");
    return combineReducers({ cart: cartReducer });
}

export function makeStore(preloadedState) {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        preloadedState,
    });
}

// create store and persistor (we'll export for use in provider)
export const store = makeStore();
export const persistor = persistStore(store);
