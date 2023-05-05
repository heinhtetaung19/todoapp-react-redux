import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        toggleDone: (state, action) => {
            const id = action.payload;
            const item = state.value.find(item => item.id === id);

            if (!item) return false;
            item.isDone = !item.isDone;
        },

        addItem: (state, action) => {
            const id = state.value.length + 1;
            const name = action.payload;
            const newItem = { id, name, isDone: false };

            if (!newItem) return false;
            return { ...state, value: [...state.value, newItem] };
        },

        deleteItem: (state, action) => {
            const id = action.payload;
            const items = state.value.filter(item => item.id !== id);

            return { ...state, value: items };
        },

        clearAll: state => {
            return { ...state, value: [] }
        },

        editItem: (state, action) => {
            const { id, name } = action.payload;
            const itemIndex = state.value.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                state.value[itemIndex].name = name;
            }
        }
    },
});

export const { toggleDone, addItem, deleteItem, clearAll, editItem } = itemsSlice.actions;

export default itemsSlice.reducer;
