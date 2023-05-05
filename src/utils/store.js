import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../slices/items/itemsSlice"

export const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
})